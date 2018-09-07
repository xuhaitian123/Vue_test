import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueInfo from '@/components/VueInfo'
import UserInfo from '@/components/UserInfo'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'VueInfo',
      component: VueInfo
    },
    {
      path: '/user',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
