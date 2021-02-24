import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";
import { localize } from "vee-validate";
import en from "vee-validate/dist/locale/en.json";

// Install English and Arabic locales.
localize({
  en
});

// No message specified.
extend("email", email);
extend("required", required);
extend("min", min);

// // Override the default message.
// extend("required", {
//   ...required,
//   message: "This {_field_} is required"
// });

// extend("min", {
//   ...min,
//   message: "This {_field_} is must be more than 6 lengths."
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
