import Home from '@/pages/Home'
import Test from '@/pages/Test'
import Live2d from '@/components/Live2d'
const routes = [
  {
    path: '/',
    redirect: '/home',

  },{
    path: '/home',
    name: 'home',
    components: {
      main: Home,
      live2d: Live2d
    }
  },{
    path: '/test',
    name: 'test',
    components: {
      main: Test
    }
  }
]

export default routes