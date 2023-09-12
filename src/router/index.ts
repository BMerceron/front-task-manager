import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: HomeView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
