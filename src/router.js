import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/' },
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/clock', name: 'Clock', component: () => import('./views/Clock.vue') },
  { path: '/date', name: 'Date', component: () => import('./views/Date.vue') },
  { path: '/todo', name: 'Todo', component: () => import('./views/Todo.vue') },
  { path: '/note', name: 'Note', component: () => import('./views/Note.vue') },
  { path: '/reference', name: 'Reference', component: () => import('./views/Reference.vue') }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router
