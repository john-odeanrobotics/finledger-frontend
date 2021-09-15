import Vue from 'vue'
import VueRouter from "vue-router";
import VueSession from "vue-session";
import App from './App.vue'
var options = {
  persist: true
}

Vue.use(VueSession, options)
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
