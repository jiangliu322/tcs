<template>
  <div id="app">
    <router-view name="main"></router-view>
    <router-view name="live2d"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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
