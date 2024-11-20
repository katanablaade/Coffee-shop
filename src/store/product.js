const product = {
  state: {
    product: null,
  },
  mutations: {
    setProductData(state, data) {
      state.product = data;
    },
    setProductRemove(state) {
      state.product = null;
    },
  },
  actions: {
    setProductData({ commit }, data) {
      commit('setProductData', data);
    },
    setProductRemove({ commit }) {
      commit('setProductRemove');
    },
  },
  getters: {
    getProduct(state) {
      return state.product;
    },
  },
};

export default product;
