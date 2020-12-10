import Vue from "vue";
import Vuex from "vuex";
import Jobs from "./jobs";
import JobDetail from "./jobDetail";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Jobs,
    JobDetail,
  },
});
