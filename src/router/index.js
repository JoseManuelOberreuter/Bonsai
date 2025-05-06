import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/servicios',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/galeria',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 