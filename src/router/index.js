import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeninView from '@/views/LeninView.vue'
import ClearSnowView from '@/views/ClearSnowView.vue'
import ToursListView from '@/views/ToursListView.vue'

const supportedLangs = ['ru', 'en', 'es', 'fr', 'de']

const getSystemLang = () => {
  const storedLang = sessionStorage.getItem("selectedLanguage");
  if (storedLang && supportedLangs.includes(storedLang)) {
    return storedLang;
  }

  const systemLang = navigator.language.slice(0, 2); // Например, "ru", "en"
  return supportedLangs.includes(systemLang) ? systemLang : "en";
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:lang/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:lang/lenin',
      name: 'lenin',
      component: LeninView,
    },
    {
      path: '/:lang/clear-snow',
      name: 'clear-snow',
      component: ClearSnowView,
    },
    {
      path: '/:lang/tours',
      name: 'tours',
      component: ToursListView,
    },
    {
      path: '/',
      redirect: () => `/${getSystemLang()}`,
    },
    {
      path: '/:catchAll(.*)',
      redirect: () => `/${getSystemLang()}`,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  const lang = to.params.lang; // Язык из маршрута
  const userLang = getSystemLang(); // Определяем язык

  if (!lang || !supportedLangs.includes(lang)) {
    sessionStorage.setItem("selectedLanguage", userLang);
    return next(`/${userLang}${to.path}`); // Редирект на правильный язык
  }

  sessionStorage.setItem("selectedLanguage", lang); // Сохраняем язык
  next();
});

export default router
