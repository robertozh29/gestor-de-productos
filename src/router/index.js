import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import('../views/ventas-page.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/productos-page.vue')
  },
  {
    path: '/proveedores',
    name: 'Proveedores',
    component: () => import('../views/ProveedoresPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router