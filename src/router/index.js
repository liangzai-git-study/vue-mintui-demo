import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/tabbars/Home'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
