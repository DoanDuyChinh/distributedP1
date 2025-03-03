import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import User from '../components/User.vue'

const routes = [
  {
    path: '/',
    // name: 'home',
    // component: HomeView
    redirect: to => {
      const userData = JSON.parse(localStorage.getItem('userData') || '{}')
      // if (userData.username) {
      //   return '/home'
      // }
      return '/login'
    },
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/profile',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes
})

export default router
