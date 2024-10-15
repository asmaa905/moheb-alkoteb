import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productsView from '../views/productsView.vue'
import dorNashrView from '@/views/dorNashrView.vue'
import followCarView from '@/views/followCarView.vue'
import mobAppView from '@/views/mobAppView.vue'
import PriceListsView from '@/views/priceListsView.vue'
import singleProductView from '@/views/singleProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: productsView
  },
  {
    path: '/dor-nashr',
    name: 'dor-nashr',
    component: dorNashrView
  },
  {
    path: '/follow-car',
    name: 'follow-car',
    component: followCarView
  },
  {
    path: '/price-list',
    name: 'price-list',
    component: PriceListsView
  },
  {
    path: '/mob-app',
    name: 'mob-app',
    component: mobAppView
  },
  { 
    path: '/products/:id',
    name: 'single-product',
    component: singleProductView 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
