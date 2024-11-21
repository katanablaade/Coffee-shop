import Vue from 'vue';
import VueRouter from 'vue-router';

// import HeroView from '../views/HeroView';
// import OurCoffee from '../views/OurCoffee';
// import YourPlesure from '../views/YourPlesure';
// import ContactsView from '../views/ContactsView';
// import ThanksView from '../views/ThanksView';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('../views/HeroView') },
  { path: '/our-coffee', component: () => import('../views/OurCoffee') },
  { path: '/your-plesure', component: () => import('../views/YourPlesure') },
  { path: '/contacts', component: () => import('../views/ContactsView') },
  { path: '/thanks', component: () => import('../views/ThanksView') },
  {
    name: 'coffee',
    path: '/our-coffee/:id',
    component: () => import('../views/ItemView'),
  },
  {
    name: 'goods',
    path: '/your-plesure/:id',
    component: () => import('../views/ItemView'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/coffee-shop/',
  routes,
});

export default router;
