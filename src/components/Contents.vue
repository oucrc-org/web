<template>
    <ul uk-accordion class="uk-list uk-padding-small">
        <li class="uk-padding-small" v-for="n in 5" v-bind:key="n">
            <a class="uk-accordion-title" href="#">新入生の方へ</a>
            <div class="uk-accordion-content">中身</div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Contents.vue"
    }
</script>

<style scoped>

</style>