import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' // This line here
Vue.use(VueMaterial)

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
