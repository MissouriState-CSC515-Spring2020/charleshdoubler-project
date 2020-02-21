import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from '@/router'
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false

Vue.component('vue-headful', vueHeadful)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')