import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "@/views/landing-page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/something-wrong',
      name: 'error',
      component: () => import('@/views/error-page.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('@/views/error-page.vue')
    }
  ]
})

export default router
