<template>
  <div id="app">
    <Header/>
    <Top />
    <Contents />
  </div>
</template>

<script>
import Header from './components/Header'
import Top from './components/Top'
import Contents from './components/Contents'


export default {
  name: 'App',
  components: {
    Header,
    Top,
    Contents
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
