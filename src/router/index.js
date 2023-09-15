import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
  },
  {
    path: '/page/:id',
    name: 'Page',
    component: () => import('@/views/Page.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('@/views/Favorites.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
