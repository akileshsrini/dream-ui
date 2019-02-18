import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import pages from '@/components/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/pages',
      name: 'pages',
      component: pages
    }
  ]
})
