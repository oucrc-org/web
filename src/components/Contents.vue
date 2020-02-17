<template>
    <ul uk-accordion="multiple:true" class="uk-list">
        <li class="uk-padding-small">
            <a class="uk-accordion-title" href="#">新入生の方へ</a>
            <div class="uk-accordion-content">
                <div>4月中は新入生向けのイベントを開催するので、興味のある方はぜひ遊びに来てください！</div>
                <ul class="uk-list uk-margin uk-margin-bottom">
                    <li>4/2 10:00~ イベント1</li>
                    <li>4/3 11:00~ イベント2</li>
                    <li>4/6 10:00~ イベント3</li>
                </ul>
                <div>上記イベント以外の日でも部員はいるので、気軽に部室見学にお越しください！</div>
            </div>
        </li>
        <li class="uk-padding-small">
            <a class="uk-accordion-title" href="#">活動内容</a>
            <div class="uk-accordion-content">
                <div>このサークルでは主に、「PC等を使ったものづくり」を行っています。具体的には、以下のようなものが該当します。</div>
                <ul class="uk-list uk-margin uk-margin-bottom">
                    <li>スマートフォンアプリの開発</li>
                    <li>3Dプリンターを用いた造形</li>
                    <li>Webサイトの作成</li>
                    <li>Unityを用いたゲーム作成</li>
                    <li>画像、動画編集</li>
                    <li>電子工作...etc.</li>
                    <li></li>
                </ul>
                <div>作った作品を学祭で展示したり、コミケで頒布することもあります。</div>
            </div>
        </li>
        <li class="uk-padding-small">
            <a class="uk-accordion-title" href="#">活動場所</a>
            <div class="uk-accordion-content">
                <div>クラブ棟2階の一番奥、209号室にある部室で活動しています。</div>
                <iframe class="uk-margin"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.1952432106496!2d133.92409102924532!3d34.68547700155222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554066d34a8412f%3A0x59f13aab8699ff49!2z44CSNzAwLTAwODIg5bKh5bGx55yM5bKh5bGx5biC5YyX5Yy65rSl5bO25Lit77yS5LiB55uu77yRIOagoeWPi-S8muaWh-WMluezu-OCr-ODqeODluajnw!5e0!3m2!1sja!2sjp!4v1581914629379!5m2!1sja!2sjp"
                        width="100%" height="300" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </li>
        <li class="uk-padding-small">
            <a class="uk-accordion-title" href="#">活動時間</a>
            <div class="uk-accordion-content">
                <div>毎週水曜日の15時に定期的な連絡のための部会を行っています。それ以外は特に決まったスケジュールもなく、空きコマや放課後などのあいた時間に気ままにやってきて活動をしています。</div>
            </div>
        </li>
    </ul>
</template>

<script>

    export default {
        components: {},
        name: "Contents.vue",
        data() {
            return {
                contents: [
                    {
                        title: "新入生の方へ",
                        description: "Welcome!"
                    },
                    {
                        title: "活動内容",
                        description: "Welcome!"
                    },
                    {
                        title: "活動場所",
                        description: "Welcome!"
                    },
                    {
                        title: "活動時間",
                        description: "Welcome!"
                    },
                    {
                        title: "設備",
                        description: "Welcome!"
                    },
                    {
                        title: "部員一覧",
                        description: "Welcome!"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>