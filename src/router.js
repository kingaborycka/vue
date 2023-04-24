import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('./views/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('./views/ProductView.vue'),
      props: true
    },
    { 
      path: "/:pathMatch(.*)*", 
      name: 'NotFound',
      component: () => import('./views/NotFound.vue') 
    }
  ]
})