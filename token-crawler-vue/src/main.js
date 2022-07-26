import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jquery from 'jquery'
import axios from 'axios'
import echarts from 'echarts'
import './plugins/element.js'
import { dPost  } from '@/request'
import { datePipe } from './utils/date.pipe';

Vue.config.productionTip = false
Vue.prototype.$post = dPost
Vue.prototype.$ = jquery
Vue.prototype.$axios = axios
Vue.prototype.$baseURL = process.env.VUE_APP_BASE_API
Vue.prototype.$echarts = echarts
Vue.prototype.$dataFormat = datePipe

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
