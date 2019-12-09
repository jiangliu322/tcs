<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/pages/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  html,body {
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
