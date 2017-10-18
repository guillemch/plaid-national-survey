import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(VueCookie)

window.Bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
