import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGoogleMaps, {
  load: {
    key: "",
    libraries: "places",
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
