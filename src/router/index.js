import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import SearchView from '@/views/SearchView.vue';

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
            name: 'SearchView',
            component: SearchView
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: () => import('@/views/FavoriteView.vue')
        },
        {
            path: '/:id',
            name: 'movies',
            component: () => import('@/views/MovieView.vue')
        }
        // {
        //   path: "/:pathMatch(.*)*",
        //   name: "not-found",
        //   component: () => import("../views/notFound.vue"),
        // },
    ]
});

export default router;
