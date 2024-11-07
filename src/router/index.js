import Vue from 'vue';
import VueRouter from 'vue-router';

import HeroView from '../views/HeroView';
import OurCoffee from '../views/OurCoffee';
import YourPlesure from '../views/YourPlesure';
import ContactsView from '../views/ContactsView';
import ThanksView from '../views/ThanksView';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffee },
  { path: '/your-plesure', component: YourPlesure },
  { path: '/contacts', component: ContactsView },
  { path: '/thanks', component: ThanksView },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
