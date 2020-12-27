import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import InputMask from 'vue-input-mask';
import store from './store'
import i18n from './i18n'

Vue.component('input-mask', InputMask)

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
