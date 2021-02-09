<template>
    <div id="health" class="uk-container uk-margin">
        <form v-if="issetUser">
            <fieldset class="uk-fieldset uk-text-center">
                <legend class="uk-legend">体温を入力してください</legend>

                <img class="uk-margin" data-src="img/health2.png" width="200" height="200" alt="Icon" uk-img>

                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="35.0℃ 〜 38.0℃">
                </div>

                <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">完了</button>

                <a class="uk-link-reset uk-display-inline-block uk-margin-top" href="#">いけちぃではありません</a>
            </fieldset>
        </form>
        <form v-else>
            <fieldset class="uk-fieldset uk-text-center">
                <legend class="uk-legend">あなたのニックネームを選択してください</legend>

                <img class="uk-margin" data-src="img/health1.png" width="200" height="200" alt="Icon" uk-img>

                <div class="uk-margin">
                    <select class="uk-select">
                        <option>Option 01</option>
                        <option>Option 02</option>
                    </select>
                </div>

                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label><input class="uk-checkbox" type="checkbox"> 次回もこのユーザーで入力する</label>
                </div>

                <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">次へ</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            issetUser: true
        }
    },
}
</script>

<style scoped>

</style>