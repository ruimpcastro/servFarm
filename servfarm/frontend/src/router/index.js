import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  // Admin page
  {
    path: '/:admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  // Home page
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  // Login page
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // Not found page
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  // Notifications page
  {
    path: "/notifications",
    name: 'Notifications',
    component: () => import('../views/Notifications.vue')
  },
  // Recommendations page
  {
    path: "/recommendation",
    name: 'Recommendations',
    component: () => import('../views/Recommendations.vue')
  },
  // Register page
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },

    // Patient Services page
    {
      path: '/service/:serv',
      name: 'ServicePage',
      component: () => import('../views/ServicePage.vue')
    },
  // Patient Services page
  {
    path: '/patient-service',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  // User page
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
