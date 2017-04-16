import VueRouter from 'vue-router';

import HomePage from './pages/home-page.vue';
import AboutPage from './pages/about-page.vue';
import ErrorPage from './pages/error-page.vue';

const routes = [
  {path: '/', component: HomePage},
  {path: '/home', component: HomePage},
  {path: '/about', component: AboutPage},
  {path: '*', component: ErrorPage},
];

export const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;