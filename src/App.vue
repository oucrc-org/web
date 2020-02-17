<template>
  <div id="app">
    <Header/>
    <Top />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Top from './components/Top'

export default {
  name: 'App',
  components: {
    Header,
    Top
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
