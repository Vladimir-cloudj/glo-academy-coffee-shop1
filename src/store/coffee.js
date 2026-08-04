const coffee = {
  state: {
    coffee: [],
    currentProduct: null,
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setCurrentProduct(state, product) {
      state.currentProduct = product;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setCurrentProduct({ commit }, product) {
      commit("setCurrentProduct", product);
    },
  },
  getters: {
    getCoffee: (state) => state.coffee,
    getCurrentProduct: (state) => state.currentProduct,
    getProductById: (state) => (id) => {
      return state.coffee.find((card) => card.id === id);
    },
  },
};

export default coffee;
