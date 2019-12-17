<template>
    <div class="wapper">
      <!-- <div class="hollow-two-circles">
        <span></span>
        <span></span>
      </div>
      <div class="button" @mousemove="btnbgc" :style="buttonobj"><span>hover me to change</span></div> -->
      <div class="radio-container"></div>
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
    name: "Test",
    data() {
      return {
        buttonobj: {

        }
      }
    },
    created () {

    },
    mounted(){
      this.showlive2d()
      //  const radioContainer = document.querySelector('.radio-container')
      // const prefix = 'live2d-widget-model-'
      // const cdnPrefix = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0'
      
      // const model = ['chitose',
      //   'epsilon2_1',
      //   'gf',
      //   'haru-01',
      //   'haru-02',
      //   'haruto',
      //   'hibiki',
      //   'hijiki',
      //   'izumi',
      //   'koharu',
      //   'miku',
      //   'ni-j',
      //   'nico',
      //   'nietzsche',
      //   'nipsilon',
      //   'nito',
      //   'shizuku',
      //   'tororo',
      //   'tsumiki',
      //   'unitychan',
      //   'wanko',
      //   'z16',]

      // const radioHtml = model.reduce(((last, current) => last + `<label for="${current}"><input type="radio" id="${current}" name="modelName" class="modelRadio" value="${current}">${current}</label>`), '')

      // radioContainer.innerHTML = radioHtml
      // const radios = document.querySelectorAll('.modelRadio')


      // radios.forEach((dom) => {
      //   dom.addEventListener('change', function () {

      //     let dir = ''
      //     console.log(this.value)

      //     switch (this.value) {
      //       case 'gf':
      //         dir = `/${prefix}${this.value}/assets/Gantzert_Felixander.model.json`
      //         break
      //       case 'epsilon2_1':
      //         dir = `/${prefix}${this.value}/assets/Epsilon2.1.model.json`
      //         break
      //       case 'haru-01':
      //         dir = `/live2d-widget-model-haru/01/assets/haru01.model.json`
      //         break
      //       case 'haru-02':
      //         dir = `/live2d-widget-model-haru/02/assets/haru02.model.json`
      //         break
      //       case 'ni-j' :
      //         dir = `/${prefix}${this.value}/assets/ni-j.model.json`
      //         break
      //       default:
      //         dir = `/${prefix}${this.value}/assets/${this.value}.model.json`
      //     }

      //     const url = cdnPrefix + dir
      //     window.loadlive2d("model", url);
      //   })
      // })
    },
    methods: {
      btnbgc(e){
        const x = e.pageX - this.offsetLeft
        const y = e.pageY - this.offsetTop

        this.buttonobj['--x'] = `${ x }px`
        this.buttonobj['--y'] = `${ y }px`
      },
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
  .hollow-two-circles {
  width: 300px;
  height: 100px;
  position: relative;
  background: radial-gradient(circle at right top, transparent 10px, #00adb5 0) top left / 60px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent 10px, #00adb5 0) bottom left /60px 51% no-repeat,
    radial-gradient(circle at left top, transparent 10px, #eeeeee 0) top right /240px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent 10px, #eeeeee 0) bottom right /240px 51% no-repeat;
   filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));
}

.hollow-two-circles::after {
  content: '';
  height: 80px;
  border: 1px dashed #fff;
  position: absolute;
  left: 60px;
  top: 0;
  bottom: 0;
  margin: auto;
}
.button {
    margin:40px auto;
    width:200px;
    height:60px;
    padding:0 30px;
    line-height: 60px;
    text-align: center;
    position: relative;
    appearance: none;
    background: #f72359;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border-radius: 100px;
  }

  .button span {
    position: relative;
  }

  .button::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width .2s ease, height .2s ease;
  }

  .button:hover::before {
    --size: 400px;
  }
  .wapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .model-container {
    position: absolute;
    top: 100%;
    margin-top: -500px;
    right: 0;
  }
</style>

