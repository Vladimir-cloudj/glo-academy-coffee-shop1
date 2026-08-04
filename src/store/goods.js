const goods = {
  state: {
    goods: [],
    currentProduct: null,
  },
  mutations: {
    setGoods(state, data) {
      state.goods = data;
    },
    setCurrentProduct(state, product) {
      state.currentProduct = product;
    },
  },
  actions: {
    setGoods({ commit }, data) {
      commit("setGoods", data);
    },
    setCurrentProduct({ commit }, product) {
      commit("setCurrentProduct", product);
    },
  },
  getters: {
    getGoods: (state) => state.goods,
    getCurrentProduct: (state) => state.currentProduct,
    getGoodsById: (state) => (id) => {
      return state.goods.find((card) => String(card.id) === String(id));
    },
  },
};

export default goods;
