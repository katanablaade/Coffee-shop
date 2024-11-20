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
    setIsLoading({ commit }, data) {
      commit('setIsLoading', data);
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
};

export default isLoading;
