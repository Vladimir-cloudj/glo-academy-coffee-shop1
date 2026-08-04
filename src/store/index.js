import Vue from "vue";
import Vuex from "vuex";
import bestsellers from "./bestsellers";
import coffee from "./coffee";
import goods from "./goods";
import links from "./links";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bestsellers,
    coffee,
    goods,
    links,
  },
});
