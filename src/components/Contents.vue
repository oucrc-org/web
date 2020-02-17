<template>
    <ul uk-accordion="multiple:true" class="uk-list uk-padding-small">
        <li v-bind:class="(index === 0) ? 'uk-padding-small uk-open' : 'uk-padding-small'" v-for="(content,index) in contents" v-bind:key="index" >
            <a class="uk-accordion-title" href="#">{{content.title}}</a>
            <div class="uk-accordion-content">{{content.description}}</div>
        </li>
    </ul>
</template>

<script>
    export default {
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