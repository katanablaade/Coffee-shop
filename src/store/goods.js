const goods = {
  state: {
    goods: [
      {
        id: 0,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'good-1.jpg',
      },
      {
        id: 1,
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
        country: 'Brazil',
        image: 'good-1.jpg',
      },
      {
        id: 2,
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
        country: 'Brazil',
        image: 'good-1.jpg',
      },
      {
        id: 3,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'good-1.jpg',
      },
      {
        id: 4,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'good-1.jpg',
      },
      {
        id: 5,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'good-1.jpg',
      },
    ],
  },
  mutations: {
    setGoodsData(state, data) {
      state.goods = data;
    },
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit('setGoodsData', data);
    },
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      };
    },
  },
};
export default goods;
