import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

 const router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to,from ,next) => {
  console.log('from')
  console.log(router)
  next()
})

export default router