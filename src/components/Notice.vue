<template>
    <div>
        <h1 class="uk-h4 uk-padding-small">
            <span uk-icon="bell" class="uk-margin-small-right"></span>お知らせ
        </h1>

        <div class="uk-padding-small">
            <ul class="uk-list uk-margin">
            <!--
                特段の注意が必要な事項には
                <span uk-icon="warning" class="uk-text-danger uk-margin-small-right"></span>
                一般的な情報には
                <span uk-icon="info" class="uk-text-primary uk-margin-small-right"></span>
            -->
                <li>
                    <span uk-icon="info" class="uk-text-primary uk-margin-small-right"></span>
                    部室での活動を再開しました。見学の際は気軽にお越しください。<a href="https://hackmd.io/@leN8onDkQoKpjiihHJ5eAA/H1Mpzl3YU">【新入生向けの案内はこちら】</a>
                </li>
                <li>
                    広報担当より。
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notice.vue"
    }
</script>

<style scoped>

</style>
