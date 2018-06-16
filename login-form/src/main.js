import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.Vue = Vue;
window.VueRouter = VueRouter;
import VueRouter from 'vue-router';
import router from './routes';
Vue.use(VueRouter);

new Vue({
 render: h => h(App),
 router
}).$mount('#app')
