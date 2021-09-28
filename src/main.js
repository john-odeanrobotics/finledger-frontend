import Vue from 'vue'
import VueSession from "vue-session";
import App from './App.vue'
import router from "./router/routes";
var options = {
    persist: true
}

Vue.use(VueSession, options);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
