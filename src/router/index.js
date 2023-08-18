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
				path: 'clone',
				name: 'clone',
				component: () => import('../views/examples/CloneView.vue'),
			},
			{
				path: 'controlclone',
				name: 'controlclone',
				component: () => import('../views/examples/ControlCloneView.vue'),
			},
			{
				path: 'trash',
				name: 'trash',
				component: () => import('../views/examples/TrashView.vue'),
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
		meta: { title: 'Docs' },
		redirect: () => { return { name: 'introduction' } },
		children: [
			{
				path: 'introduction',
				name: 'introduction',
				component: () => import('../views/docs/IntroductionView.vue'),
			},
			{
				path: 'start',
				name: 'start',
				component: () => import('../views/docs/StartView.vue'),
			},
			{
				path: 'tutorial',
				name: 'tutorial',
				component: () => import('../views/docs/TutorialView.vue'),
			},
			{
				path: 'props-and-emits',
				name: 'PropsAndEmits',
				component: () => import('../views/docs/PropsAndEmitsView.vue'),
			},
			{
				path: 'support',
				name: 'support',
				component: () => import('../views/docs/SupportView.vue'),
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
	if (to.query.title) {
		document.title = `${ to.query.title }`
	} else {
		document.title = to.meta.title === 'Drag & Drop' ? `Vue.js - Ready to Use ${to.meta.title} components` : `${to.meta.title} | Vue.js - Drag & Drop`;
	}
	next()
})

export default router
