import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'

import AuthService from '@/services/authService';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'signin',
      meta: {
        requiresAuth: false,
      },
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
  const matchRequiredAuth = to.matched.some(record => record.meta.requiresAuth);
  // if we go on signin page, check if we are already logged, then redirect to 'home' page.
  if(to.name === 'signin' && AuthService.isAuthenticated()) {
    next({ name: 'home'})
  }
  // if we acces on a protected page and we are note logged, redirect to 'signin' page.
  if (matchRequiredAuth && !AuthService.isAuthenticated()) {
    // in case where user close the browser and reopen it : its remove the localstorage items.
    if(localStorage.getItem('userId') || localStorage.getItem('username')) {
      localStorage.removeItem('userId')
      localStorage.removeItem('username')
    }
    next({ name: 'signin' });
  } else {
    next();
  }
});

export default router
