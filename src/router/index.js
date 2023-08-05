import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
		meta: { title: 'Examples' },
		redirect: () => { return { name: 'simple' } },
		children: [
			{
				path: 'simple',
				name: 'simple',
				component: () => import('../views/examples/SimpleView.vue'),
			},
			{
				path: 'trello',
				name: 'trello',
				component: () => import('../views/examples/TrelloView.vue'),
			},
			{
				path: 'avatar',
				name: 'avatar',
				component: () => import('../views/examples/AvatarView.vue'),
			},
			{
				path: 'upload',
				name: 'upload',
				component: () => import('../views/examples/UploadView.vue'),
			}
		]
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
		document.title = to.meta.title === 'Drag & Drop' ? `Vue.js - ${to.meta.title}` : `${to.meta.title} | Vue.js - Drag & Drop`;
	}
	next()
})

export default router
