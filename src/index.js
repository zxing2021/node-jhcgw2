import Vue from 'vue/dist/vue.esm';
import App from './App.vue';
import store from './config/store';
import router from './config/router';
import './config/axios';
import './config/antd';
let app = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
