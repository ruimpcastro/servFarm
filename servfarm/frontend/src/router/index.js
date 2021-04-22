import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
// Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Shop
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  // Booking
  {
    path: '/booking',
    name: 'Book',
    component: () => import('../views/Booking.vue')
  },
  // Plans & Pricing
  {
    path: '/plans-pricing',
    name: 'Plans',
    component: () => import('../views/Plans.vue')
  },
  // Patient Services
  {
    path: '/patient-service',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
    // Contact
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Login.vue')
    },
  // Login
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // User
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
