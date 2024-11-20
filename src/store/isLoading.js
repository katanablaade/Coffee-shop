const isLoading = {
  state: {
    isLoading: false,
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = true;
    },
  },
  actions: {
    setIsLoading({ commit }) {
      commit('setIsLoading');
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
};

export default isLoading;
