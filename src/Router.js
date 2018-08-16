import Vue from 'vue'
import Router from 'vue-router'
import Home from './Pages/Home.vue'
import Talks from './Pages/Talks.vue'
import Videos from './Pages/Videos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/talks',
      name: 'Talks',
      component: Talks
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    }
  ]
})
