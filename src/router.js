import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/' },
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/calender', name: 'Calender', component: () => import('./views/Calender.vue') },
  { path: '/pomodoro', name: 'Pomodoro', component: () => import('./views/Pomodoro.vue') },
  { path: '/todo-list', name: 'TodoList', component: () => import('./views/TodoList.vue') },
  { path: '/todo-post-it', name: 'TodoPostIt', component: () => import('./views/TodoPostIt.vue') },
  { path: '/collection', name: 'Collection', component: () => import('./views/Collection.vue') }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router
