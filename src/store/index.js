import Vue from 'vue';
import Vuex from 'vuex';

import links from './links';
import bestsellers from './bestsellers';
import coffee from './coffee';
import goods from './goods';
import product from './product';
import isLoading from './isLoading';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffee,
    goods,
    product,
    isLoading,
  },
});

export default store;
