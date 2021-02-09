<template>
    <div id="app" class="uk-width-xxlarge@m uk-align-center uk-margin-remove-top">
        <Header/>
        <router-view/>
<!--        <Top/>-->
<!--        <Notice/>-->
<!--        <Contents/>-->
    </div>
</template>

<script>
    import Header from './components/Header'
    // import Top from './components/Top'
    // import Notice from './components/Notice'
    // import Contents from './components/Contents'

    export default {
        name: 'App',
        components: {
            Header,
            // Top,
            // Notice,
            // Contents
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
