// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'//mint-ui默认css样式 
import { Header,Button } from 'mint-ui';
Vue.component(Button.name, Button)
Vue.component(Header.name, Header);

// Vue.http.options.root='https://index/home/api.txt' //全局配置根路径为 /root  需要请求 https://index/home/api.txt/newlist/picture  时只需要写  axios.get('newlist/picture') !!!一定不能加斜杠

import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'
import '../lib/mui/dist/css/mui.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
