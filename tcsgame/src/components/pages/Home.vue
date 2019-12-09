<template>
    <div class="home">
      <div v-show="!over" v-for="(item, index) in snakeList" :key="index" class="mysnake" :style="snakeList[index]"></div>
      <div v-show="over" class="gameover"><h1>重新开始</h1></div>
      <div v-show="!over" class="food" v-for="(item, index) in foodList" :key="item.index + 'test'" :style="foodList[index]"></div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
      return {
        gowhere: 'top',
        snakeList: [],
        snakeTime: null,
        screenWidth: '',
        screenHeight: '',
        over: false,
        foodList: [],
        foodInt: ''
      }
    },
    created () {
      this.screenWidth = document.body.clientWidth
      this.screenHeight = document.body.clientHeight
      for(let i = 0; i < 5; i++){
        let newsnake = {}
        newsnake.left = (0-i) * 20 + 'px'
        newsnake.top = 0 + 'px'
        this.snakeList.push(newsnake)
      }
      document.onkeydown = () => {
        let key = window.event.keyCode
        this.moveMySnake(key)
      }
      this.newFood(5000)
      // this.moveMySnake(39)
    },
    methods: {
      // 控制我的小蛇移动方向
      moveMySnake(fx) {
        console.log(fx)
        if(fx === 39){
          this.movehow('left', 20)
        }else if(fx === 40){
          this.movehow('top', 20)
        }else if(fx === 38){
          this.movehow('top', -20)
        }else if(fx === 37){
          this.movehow('left', -20)
        }

      },
      // 用于移动我的小蛇的函数
      movehow(fx,istrue) {
        clearInterval(this.snakeTime)
        this.snakeTime = setInterval(() => {
          let oldLeft = ''
          let oldTop = ''
          for(let i = 0; i < this.snakeList.length; i++){
            if(!i){
              oldLeft = this.snakeList[i].left
              oldTop = this.snakeList[i].top
              this.snakeList[i][fx] = Number(this.snakeList[i][fx].split('px')[0]) + istrue + 'px'
            }else {
              let thisLeft = this.snakeList[i].left
              let thisTop = this.snakeList[i].top
              this.snakeList[i].left = oldLeft
              this.snakeList[i].top = oldTop
              oldLeft = thisLeft
              oldTop = thisTop
            }
          }
          this.isgameover()
          this.eatFood()
        }, 60)
        
      },
      // 检测碰撞
      isgameover() {
        Number(this.snakeList[0].left.split('px')[0]) < 0 ? this.over = true : ''
        Number(this.snakeList[0].top.split('px')[0]) < 0 ? this.over = true : ''
        Number(this.snakeList[0].left.split('px')[0]) + 20 >= this.screenWidth ? this.over = true : ''
        Number(this.snakeList[0].top.split('px')[0]) + 20 >= this.screenHeight ? this.over = true : ''
        for(let i = 1; i < this.snakeList.length; i++){
          if(this.snakeList[0].left === this.snakeList[i].left && this.snakeList[0].top === this.snakeList[i].top){
            this.over = true
          }
        }
        if(this.over){
          clearInterval(this.snakeTime)
          clearInterval(this.foodInt)
        }
      },
      // 吃
      eatFood(){
        
        for(let i = 0; i < this.foodList.length; i++){
          if(Math.abs(Number(this.snakeList[0].left.split('px')[0]) - Number(this.foodList[i].left.split('px')[0])) < 20 && Math.abs(Number(this.snakeList[0].top.split('px')[0]) - Number(this.foodList[i].top.split('px')[0])) < 20){
            
            let newsnake = {}
            newsnake.left = this.snakeList[this.snakeList.length -1].left
            newsnake.top = this.snakeList[this.snakeList.length -1].top
            this.snakeList.push(newsnake)
          }
        }
      },
      // 生成食物
      newFood(time) {
        let index = 0
        this.foodInt = setInterval(() => {
          
          let newFoods = {}
          newFoods.left = Math.floor(Math.random() * (this.screenWidth - 10) + 10) + 'px'
          newFoods.top = Math.floor(Math.random() * (this.screenHeight - 10) + 10) + 'px'
          newFoods.index = index
          index++
          this.foodList.push(newFoods)
          if(this.foodList.length > 20){
            clearInterval(this.foodInt)
          }
        },time)
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
  .home {
    width: 100%;
    height: 100%;
    background-color: #DEDEDE;
    border: 5px solid rgb(184, 172, 151);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .mysnake {
    width: 20px;
    height: 20px;
    background-color: yellow;
    position: absolute;
    border-radius: 50%;
    display: inline-block;
  }
  .food {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    display: inline-block;
    background-color: red;
  }
  .gameover {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }
  h1 {
    position: absolute;
    width: 200px;
    height: 100px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
</style>

