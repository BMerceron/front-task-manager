import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'

import authService from '@/services/authService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: AuthView
    },
    {
      path: '/signup',
      name: 'signup',
      component: AuthView
    },
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth: true,
      },
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !authService.isAuthenticated) {
    next({ name: 'signin' });
  } else {
    next();
  }
});

export default router
