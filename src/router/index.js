import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
	 {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue') 
    },
	 {
      path: '/examples',
      name: 'examples',
      component: () => import('../views/ExamplesView.vue') 
    },
	 {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/DocsView.vue') 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue') 
    },
  ]
})

export default router
