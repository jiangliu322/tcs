<template>
    <div class="wapper">
      <div class="model-container">
        <canvas
          width="280"
          height="500"
          id="model"></canvas>
      </div>
    </div>
    
</template>

<script>
export default {
    name: "Live2d",
    data() {
      return {
      }
    },
    created () {

    },
    mounted(){
      this.showlive2d()
    },
    methods: {
      showlive2d(){
        let liveprefix = 'live2d-widget-model-'
        let liveValue = 'shizuku'
        let dir = `/${liveprefix}${liveValue}/assets/${liveValue}.model.json`
        let livecdnPrefix = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0'
        let liveUrl = livecdnPrefix + dir
        window.loadlive2d("model", liveUrl);
      }
    }
}
</script>

<style>
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .wapper {
    position: fixed;
    width: 280px;
    height: 500px;
    top: 100%;
    margin-top: -500px;
    right: 0;
  }
  #model {
    z-index: 999;
  }
</style>

