import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  // Not found
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  // Home
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
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
  // Register
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  // User
  {
    path: '/user/:name',
    name: 'User',
    component: () => import('../views/User.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
