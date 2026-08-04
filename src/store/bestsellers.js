const bestsellers = {
  state: {
    bestsellers: [],
  },
  mutations: {
    setBestsellers(state, data) {
      state.bestsellers = data;
    },
  },
  actions: {
    setBestsellers({ commit }, data) {
      commit("setBestsellers", data);
    },
  },
  getters: {
    getBestsellers: (state) => state.bestsellers,
  },
};

export default bestsellers;
