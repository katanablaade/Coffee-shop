const coffee = {
  state: {
    coffee: [
      {
        id: 0,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'coffee-3.jpg',
      },
      {
        id: 1,
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
        country: 'Brazil',
        image: 'coffee-3.jpg',
      },
      {
        id: 2,
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
        country: 'Brazil',
        image: 'coffee-3.jpg',
      },
      {
        id: 3,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'coffee-3.jpg',
      },
      {
        id: 4,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'coffee-3.jpg',
      },
      {
        id: 5,
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil',
        image: 'coffee-3.jpg',
      },
    ],
  },
  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
  },
};

export default coffee;