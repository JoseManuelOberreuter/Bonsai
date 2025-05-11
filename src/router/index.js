import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/nosotros',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/portafolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/Bonsai/'),
  routes,
  scrollBehavior() {
    // always scroll to top when navigating between views
    return { top: 0 }
  }
})

export default router 