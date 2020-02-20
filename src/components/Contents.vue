<template>
    <ul uk-accordion="multiple:true" class="uk-list uk-list-divider">
        <li class="uk-open">
            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="user"
                                                                          class="uk-margin-small-right"></span>新入生の方へ</a>
            <div class="uk-accordion-content uk-padding-small">
                <div>4月中は新入生向けのイベントを開催する予定なので、興味のある方はぜひ遊びに来てください！</div>
                <ul class="uk-list uk-margin uk-margin-bottom">
                    <li>4/3 13:00~ coming soon</li>
                    <li>4/6 13:00~ coming soon</li>
                    <li>4/7 13:00~ スマホアプリ開発体験会</li>
                </ul>
                <div>上記イベント以外の日でも部員はいるので、気軽に部室見学にお越しください！</div>
                <div class="uk-margin-top"><a href="https://forms.gle/M1XJeULJGx9r2MMC9">こちら</a>のアンケートに予め回答していただけると、サークル見学をスムーズに行うことができます！
                </div>
            </div>
        </li>
        <li v-bind:class="{'uk-open' : wide}">
            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="file-edit"
                                                                          class="uk-margin-small-right"></span>活動内容</a>
            <div class="uk-accordion-content uk-padding-small">
                <div>このサークルでは主に、「PC等を使ったものづくり」を行っています。具体的には、以下のようなものが該当します。</div>
                <ul class="uk-list uk-margin uk-margin-bottom">
                    <li>スマートフォンアプリの開発</li>
                    <li>3Dプリンターを用いた造形</li>
                    <li>Webサイトの作成</li>
                    <li>Unityを用いたゲーム作成</li>
                    <li>画像、動画編集</li>
                    <li>電子工作...etc.</li>
                </ul>
                <div>作った作品を学祭で展示したり、コミケで頒布することもあります。</div>
            </div>
        </li>
        <li v-bind:class="{'uk-open' : wide}">
            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="location"
                                                                          class="uk-margin-small-right"></span>活動場所</a>
            <div class="uk-accordion-content uk-padding-small">
                <div>クラブ棟2階の一番奥、209号室にある部室で活動しています。</div>
                <iframe class="uk-margin"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.1952432106496!2d133.92409102924532!3d34.68547700155222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554066d34a8412f%3A0x59f13aab8699ff49!2z44CSNzAwLTAwODIg5bKh5bGx55yM5bKh5bGx5biC5YyX5Yy65rSl5bO25Lit77yS5LiB55uu77yRIOagoeWPi-S8muaWh-WMluezu-OCr-ODqeODluajnw!5e0!3m2!1sja!2sjp!4v1581914629379!5m2!1sja!2sjp"
                        width="100%" height="300" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </li>
        <li v-bind:class="{'uk-open' : wide}">

            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="clock"
                                                                          class="uk-margin-small-right"></span>活動時間</a>
            <div class="uk-accordion-content uk-padding-small">
                <div>毎週水曜日の15時から定期的な連絡のための部会を行っています。それ以外は特に決まったスケジュールもなく、空きコマや放課後などの空いた時間に気ままにやってきて活動をしています。</div>
            </div>
        </li>
        <li v-bind:class="{'uk-open' : wide}">

            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="desktop"
                                                                          class="uk-margin-small-right"></span>作業環境</a>
            <div class="uk-accordion-content uk-padding-small">
                <div>部室には、部員の創作活動を支援するための様々な設備があります。</div>
                <ul class=" uk-margin uk-margin-bottom">
                    <li>
                        <img src="../assets/img/equip-1.png" alt="" uk-img>
                        <p>PC（部室内に6台設置されています）</p>
                    </li>
                    <li>
                        <img src="../assets/img/equip-2.png" alt="" uk-img>
                        <p>3Dプリンター</p>
                    </li>
                    <li>
                        <img src="../assets/img/equip-4.png" alt="" uk-img>
                        <p>VR</p>
                    </li>
                    <li>
                        <img src="../assets/img/equip-5.png" alt="" uk-img>
                        <p>息抜き用のゲーム</p>
                    </li>
                    <li>
                        <img src="../assets/img/equip-6.png" alt="" uk-img>
                        <p>息抜き用の漫画</p>
                    </li>
                </ul>
            </div>
        </li>
        <li v-bind:class="{'uk-open' : wide}">

            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="question"
                                                                          class="uk-margin-small-right"></span>よくある質問</a>
            <div class="uk-accordion-content uk-padding-small">
                <ul class="uk-list uk-margin uk-margin-bottom">
                    <li>Q. 部室を利用可能な時間帯を教えてください。</li>
                    <li>A. 平日は 8:30 ~ 22:00 日祝は 8:30 ~ 18:00 です。</li>
                </ul>
                <ul class="uk-list uk-margin uk-margin-bottom">
                    <li>Q. 部費を教えてください。</li>
                    <li>A. 半年で5000円です。（部内の備品購入のため）</li>
                </ul>
                <div>その他ご不明点がございましたら<a href="https://twitter.com/oucrc">こちら</a>までご連絡ください</div>
            </div>
        </li>
        <li v-bind:class="{'uk-open' : wide}">
            <a class="uk-accordion-title uk-padding-small" href="#"><span uk-icon="users"
                                                                          class="uk-margin-small-right"></span>部員一覧</a>
            <div class="uk-accordion-content uk-padding-small">
                <div class="uk-overflow-auto">
                    <table class="uk-table uk-table-divider uk-table-hover ">
                        <caption>部員一覧</caption>
                        <thead>
                        <tr>
                            <th class="uk-width-medium">名前</th>
                            <th>ひとこと</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(member,index) in members" v-bind:key="index">
                            <td>{{member.displayName}}</td>
                            <td>{{member.comment}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="uk-table uk-table-divider">
                        <caption>OB一覧</caption>
                        <thead>
                        <tr>
                            <th>名前</th>
                            <th>入学年</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(member,index) in ob_members" v-bind:key="index">
                            <td v-if="member.page !== ''"><a v-bind:href="'/members/' + member.page + '.html'"
                                                             target="_blank"
                                                             rel="noopener noreferrer">{{member.displayName}}</a></td>
                            <td v-if="member.page === ''">{{member.displayName}}</td>
                            <td>{{member.enter_year.slice(-4)}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Contents.vue",
        data: function () {
            return {
                members: [],
                ob_members: [],
                wide: false,
            }
        },
        mounted: function () {
            this.wide = window.innerWidth >= 800;

            axios
                .get('https://script.googleusercontent.com/macros/echo?user_content_key=JCf1HO7IP01K1wzSm648YX8F4FcJdpviFGQOOVvdaOIDvUGC9XAxYxP0-PvCfh-2S7RBzA-v4fLo5JEkBF-JU9xlCU4-CZQAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMRAGFI0-QGNX4Jz3W7T99ugSi8BY1exrtLTYIGMKDoqQvibYMBWP39Ee6T_t52hW1XyIfAI_nNF&lib=MAZqi4sOZBdvkpEAXMFivKoPkYHNpZ28D')
                .then(response => {
                    this.members = response.data.filter((data => Number(data.status) === 1));
                    this.ob_members = response.data.filter(data => Number(data.status) === 0);

                })
        }
    }
</script>

<style scoped>

</style>