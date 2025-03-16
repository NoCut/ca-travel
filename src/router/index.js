import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeninView from '@/views/LeninView.vue'
import ClearSnowView from '@/views/ClearSnowView.vue'
import ToursListView from '@/views/ToursListView.vue'
import ReqView from '@/views/ReqView.vue'

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
      path: '/req',
      name: 'req',
      component: ReqView,
    }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
