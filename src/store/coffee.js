const coffee = {
  state: {
    coffee: [],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
  },
  getters: {
    getCoffee: (state) => state.coffee,
    getProductById: (state) => (id) => {
      return state.coffee.find((card) => card.id === id);
    },
  },
};

export default coffee;
