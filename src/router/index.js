import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import pages from '@/components/pages'
import akileshPortfolio from '@/components/pages/PortFolio'

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
    },
    {
      path: '/pages/akilesh-portfolio',
      name: 'akilesh-portfolio',
      component: akileshPortfolio
    }
  ]
})
