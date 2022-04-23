import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/' },
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/calender', name: 'Calender', component: () => import('./views/Calender.vue') },
  { path: '/pomodoro', name: 'Pomodoro', component: () => import('./views/Pomodoro.vue') },
  { path: '/todo', name: 'Todo', component: () => import('./views/Todo.vue') },
  { path: '/collection', name: 'Collection', component: () => import('./views/Collection.vue') }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router
