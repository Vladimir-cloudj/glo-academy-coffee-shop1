import Vue from "vue";
import Vuex from "vuex";
import bestsellers from "./bestsellers";
import coffee from "./coffee";
import goods from "./goods";
import links from "./links";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  mutations: {
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    startLoading({ commit }) {
      commit("setLoading", true);
    },
    endLoading({ commit }) {
      commit("setLoading", false);
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
  },
  modules: {
    bestsellers,
    coffee,
    goods,
    links,
  },
});
