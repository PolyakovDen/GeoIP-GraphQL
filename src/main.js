import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import InputMask from 'vue-input-mask';
import store from './store'

Vue.component('input-mask', InputMask)

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  store,
  render: h => h(App)
}).$mount('#app')
