import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: ()=> import('@/views/SearchView'),
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: ()=> import('@/views/FavoriteView'),
    },
    {
      path: '/movies/:id',
      name: 'movies',
      component: ()=> import('@/views/MovieView.vue'),
    },
    /* В конце списка - 404 */
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "not-found",
    //   component: () => import("../views/notFound.vue"),
    // },
  ]
})

export default router
