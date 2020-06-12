// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'//mint-ui默认css样式 
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'

import '../lib/mui/dist/css/mui.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
