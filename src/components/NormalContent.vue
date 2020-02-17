<template>
    <li class="uk-padding-small">
        <a class="uk-accordion-title" href="#">{{title}}</a>
        <div class="uk-accordion-content">{{description}}</div>
    </li>
</template>

<script>
    export default {
        name: "Content",
        props: ['title','description']
    }
</script>

<style scoped>

</style>