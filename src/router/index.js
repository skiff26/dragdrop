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
		meta: { title: 'Drag and Drop' }
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
				meta: { title: 'Example - Simple' }
			},
			{
				path: 'trello',
				name: 'trello',
				component: () => import('../views/examples/TrelloView.vue'),
				meta: { title: 'Example - Trello' }
			},
			{
				path: 'clone',
				name: 'clone',
				component: () => import('../views/examples/CloneView.vue'),
				meta: { title: 'Example - Clone' }
			},
			{
				path: 'controlclone',
				name: 'controlclone',
				component: () => import('../views/examples/ControlCloneView.vue'),
				meta: { title: 'Example - Clone on control' }
			},
			{
				path: 'trash',
				name: 'trash',
				component: () => import('../views/examples/TrashView.vue'),
				meta: { title: 'Example - Trash' }
			},
			{
				path: 'avatar',
				name: 'avatar',
				component: () => import('../views/examples/AvatarView.vue'),
				meta: { title: 'Example - Avatar' }
			},
			{
				path: 'upload',
				name: 'upload',
				component: () => import('../views/examples/UploadView.vue'),
				meta: { title: 'Example - File Upload' }
			}
		]
    },
	 {
      path: '/docs',
      name: 'docs',
      component: () => import('../views/DocsView.vue'),
		meta: { title: 'Docs' },
		redirect: () => { return { name: 'introduction' } },
		children: [
			{
				path: 'introduction',
				name: 'introduction',
				component: () => import('../views/docs/IntroductionView.vue'),
				meta: { title: 'Introduction' }
			},
			{
				path: 'start',
				name: 'start',
				component: () => import('../views/docs/StartView.vue'),
				meta: { title: 'Quick Start' }
			},
			{
				path: 'tutorial',
				name: 'tutorial',
				component: () => import('../views/docs/TutorialView.vue'),
				meta: { title: 'Tutorial' }
			},
			{
				path: 'props-and-emits',
				name: 'PropsAndEmits',
				component: () => import('../views/docs/PropsAndEmitsView.vue'),
				meta: { title: 'Props and Emits' }
			},
			{
				path: 'faq',
				name: 'FAQ',
				component: () => import('../views/docs/FAQView.vue'),
				meta: { title: 'FAQ' }
			},
			{
				path: 'support',
				name: 'support',
				component: () => import('../views/docs/SupportView.vue'),
				meta: { title: 'Support' }
			}
		]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue'),
		meta: { title: '404' }
    }
  ]
})

router.beforeEach((to, from, next) => {
	window.scrollTo(0, 0)
	document.title = to.meta.title === 'Drag and Drop' ? `Vue.js - Ready to Use ${to.meta.title} Components | Vue 3` : `${to.meta.title} | Vue.js - Drag and Drop`
	next()
})

export default router
