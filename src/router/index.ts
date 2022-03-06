import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' //表示导入的是个类型

import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue')
    // children: [] -> 根据useMenus来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  // createWebHistory、createWebHashHistory
  history: createWebHistory()
})

router.beforeEach((to) => {
  // 页面跳转之前 不是登录页面才判断是否登录
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }

    // 获取所有路由
    // console.log(router.getRoutes())
    // 即将要跳转到的route对象
    // console.log(to)

    if (to.path === '/main') {
      // main/analysis/overview
      return firstMenu.url
    }
  }
})

export default router
