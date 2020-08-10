import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFeather from "vue-feather";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

Vue.use(VueFeather);
