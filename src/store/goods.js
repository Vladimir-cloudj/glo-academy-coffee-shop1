const goods = {
  state: {
    goods: [],
  },
  mutations: {
    setGoods(state, data) {
      state.goods = data;
    },
  },
  actions: {
    setGoods({ commit }, data) {
      commit("setGoods", data);
    },
  },
  getters: {
    getGoods: (state) => state.goods,
  },
};

export default goods;
