import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
		meta: { title: 'Drag & Drop' }
    },
	 {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
		meta: { title: 'About' }
    },
	 {
      path: '/examples',
      name: 'examples',
      component: () => import('../views/ExamplesView.vue'),
		meta: { title: 'Examples' }
    },
	 {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/DocsView.vue'),
		meta: { title: 'Docs' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue'),
		meta: { title: '404' }
    },
  ]
})

router.beforeEach((to, from, next) => {
	if (to.query.title) {
		document.title = `${ to.query.title }`
	} else {
		document.title = to.meta.title === 'Drag & Drop' ? `Vue.js:  - ${to.meta.title}` : `${to.meta.title} | Vue.js - Drag & Drop`;
	}
	next()
})

export default router
