<template>
    <div id="health" class="uk-container uk-margin">
        <div uk-alert v-if="showAlert">
            <a class="uk-alert-close" uk-close @click="showAlert = false"></a>
            <p>{{ alert }}</p>
        </div>
        <form v-if="issetMember">
            <fieldset class="uk-fieldset uk-text-center">
                <legend class="uk-legend">体温を入力してください</legend>

                <img class="uk-margin" data-src="img/health2.png" width="200" height="200" alt="Icon" uk-img>

                <div class="uk-margin">
                    <input v-model="temperature" class="uk-input" type="number" max="38" min="35" step="0.1"
                           placeholder="35.0 〜 38.0">
                </div>

                <a @click="register" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">完了</a>

                <a @click="resetMember" class="uk-link-reset uk-display-inline-block uk-margin-top">{{
                        memberName
                    }}ではありません</a>
            </fieldset>
        </form>
        <form v-else>
            <fieldset class="uk-fieldset uk-text-center">
                <legend class="uk-legend">あなたのニックネームを選択してください</legend>

                <img class="uk-margin" data-src="img/health1.png" width="200" height="200" alt="Icon" uk-img>

                <div class="uk-margin">
                    <select v-model="memberKey" class="uk-select">
                        <option disabled value="initial">ニックネームを選択</option>
                        <option v-for="member in members" :key="member.member_key" v-bind:value="member.member_key">
                            {{ member.nick_name }}
                        </option>
                    </select>
                </div>

                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label><input v-model="saveMemberKey" class="uk-checkbox" type="checkbox"> 次回もこのユーザーで入力する</label>
                </div>

                <a @click="confirmMember" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                    次へ
                </a>
            </fieldset>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            showAlert: false,
            alert: null,
            members: null,
            issetMember: false,
            memberKey: 'initial',
            memberName: null,
            saveMemberKey: false,
            temperature: null
        }
    },
    watch: {
        memberKey: {
            immediate: true,
            handler: function () {
                if (this.memberKey !== 'initial')
                    axios
                        .get('http://localhost/v1.1/personal/inputTemperatureAction?member_key=' + this.memberKey)
                        .then(response => {
                            if (response.data.success)
                                this.memberName = response.data.data
                        })
            }
        }
    },
    mounted() {
        if (this.$cookies.get('MemberKey') !== undefined && this.$cookies.get('MemberKey') !== null) {
            this.issetMember = true
            this.memberKey = this.$cookies.get('MemberKey')
        }
        axios
            .get('http://localhost/v1.1/personal/memberSelectAction')
            .then(response => {
                if (response.data.success)
                    this.members = response.data.data
            })
    },
    methods: {
        confirmMember: function () {
            if (this.memberKey === 'initial') {
                this.showAlert = true
                this.alert = 'ニックネームを選択してください'
            } else {
                this.showAlert = false
                this.issetMember = true
                if (this.saveMemberKey) {
                    this.$cookies.config(60 * 60 * 24 * 30, '')
                    this.$cookies.set('MemberKey', this.memberKey)
                }
            }
        },
        resetMember: function () {
            this.issetMember = false
            this.memberKey = 'initial'
            this.$cookies.remove('MemberKey')
        },
        register: function () {
            if (this.temperature == null || this.temperature < 35 || this.temperature > 38) {
                this.showAlert = true
                this.alert = '35.0℃ 〜 38.0℃で体温を入力してください'
            } else {
                this.showAlert = false
                axios
                    .post('http://localhost/v1.1/personal/registerAction?member_key=' + this.memberKey + '&body_temperature=' + this.temperature)
                    .then(response => {
                        if (response.data.success) {
                            this.temperature = null
                            this.showAlert = true
                            this.alert = '登録完了しました！'
                        } else {
                            this.showAlert = true
                            this.alert = '登録に失敗しました'
                        }
                    })
            }
        }
    }
}
</script>

<style scoped>

</style>