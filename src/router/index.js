import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeninView from '@/views/LeninView.vue'
import ClearSnowView from '@/views/ClearSnowView.vue'
import ToursListView from '@/views/ToursListView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
