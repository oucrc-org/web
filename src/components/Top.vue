<template>
    <div class="uk-position-relative" uk-slideshow="animation: fade">

        <ul class="uk-slideshow-items">
            <li>
                <img src="../assets/img/top-1.png" alt="" uk-cover>
            </li>
            <li>
                <img src="../assets/img/top-2.png" alt="" uk-cover>
            </li>
            <li>
                <img src="../assets/img/top-3.png" alt="" uk-cover>
            </li>
        </ul>

        <div class="uk-position-bottom-center uk-position-small">
            <ul class="uk-thumbnav">
                <li uk-slideshow-item="0"><a href="#"><img src="../assets/img/top-1_small.png" alt="トップ画像"></a></li>
                <li uk-slideshow-item="1"><a href="#"><img src="../assets/img/top-2_small.png" alt=""></a></li>
                <li uk-slideshow-item="2"><a href="#"><img src="../assets/img/top-3_small.png" alt=""></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Top.vue"
    }
</script>

<style scoped>

</style>