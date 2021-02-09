<template>
    <div>
        <Top/>
        <Notice/>
        <Contents/>
    </div>
</template>

<script>
import Top from './Top'
import Notice from './Notice'
import Contents from './Contents'

export default {
    name: 'Home',
    components: {
        Top,
        Notice,
        Contents
    }
}
</script>

<style scoped>

</style>