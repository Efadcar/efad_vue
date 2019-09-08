import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import REQUESTS from './requests';
import API from './api';

Vue.prototype.$API = API;
Vue.prototype.$REQUESTS = REQUESTS;
Vue.config.productionTip = false;

/*
 * Extending the Vue prototype with a new '$bus' property
 * to easily access global event bus from any child component.
 */
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});
let bus = new Vue();

new Vue({
  	router,
  	store,
  	render: h => h(App),
  	data: {
    	bus: bus,
	},
}).$mount("#app");
