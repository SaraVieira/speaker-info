import Vue from 'vue'
import App from './App.vue'
import router from './Router'

import VueYoutube from 'vue-youtube'
Vue.config.productionTip = false

Vue.use(VueYoutube)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
