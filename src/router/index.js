import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      component: () => import('@/components/Parent')
    },
    {
      path: '/sibling',
      name: 'Sibling',
      component: () => import('@/components/Sibling')
    }
  ]
})
