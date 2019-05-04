import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavBar from './components/global/NavBar.vue';
Vue.config.productionTip = false

Vue.component('mynav',NavBar);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
