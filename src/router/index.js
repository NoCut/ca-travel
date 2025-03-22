import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeninView from '@/views/LeninView.vue'
import ClearSnowView from '@/views/ClearSnowView.vue'
import ToursListView from '@/views/ToursListView.vue'
import RecomView from '@/views/RecomView.vue'
import CampView from '@/views/CampView.vue'
import InfoView from '@/views/InfoView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

import { isAuthenticated } from '@/utils/api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/lenin',
      name: 'lenin',
      component: LeninView,
    },
    {
      path: '/clear-snow',
      name: 'clear-snow',
      component: ClearSnowView,
    },
    {
      path: '/tours',
      name: 'tours',
      component: ToursListView,
    },
    {
      path: '/recom',
      name: 'recom',
      component: RecomView,
    },
    {
      path: '/camps',
      name: 'camps',
      component: CampView,
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true
      },
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next()
        } else {
          next({ name: 'login' })
        }
      }
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' }
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
