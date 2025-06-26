import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue')
  },
  {
    path: '/news/detail',
    name: 'NewsDetail',
    component: () => import('@/views/News/NewsDetail.vue')
  },
  {
    path: '/exhibition',
    name: 'Exhibition3D',
    component: () => import('@/views/Exhibition3D.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 