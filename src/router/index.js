import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/parent',
      name: 'Parent',
      component: () => import('@/components/Parent')
    },
    {
      path: '/sibling',
      name: 'Sibling',
      component: () => import('@/components/Sibling')
    },
    {
      path: '/storeMutation',
      name: 'StoreMutation',
      component: () => import('@/components/storeMutation')
    },
    {
      path: '/storeActions',
      name: 'storeActions',
      component: () => import('@/components/storeActions')
    }
  ]
})
