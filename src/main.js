import Vue from 'vue'
import VueSession from "vue-session";
import App from './App.vue'
import router from "./router/routes";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleLeft, faRedo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
var options = {
    persist: true
}

Vue.use(VueSession, options);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
