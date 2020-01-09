import Vue from 'vue'
import App from './App.vue'
// import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
// Vue.use(AntDesign)
import { Button, Card, Modal, Radio, Drawer, Icon } from 'ant-design-vue'

Vue.component(Button.name, Button)
Vue.component(Card.name, Card)
Vue.component(Modal.name, Modal)
Vue.component(Drawer.name, Drawer)
Vue.component(Icon.name, Icon)
Vue.component(Radio.name, Radio)
Vue.component(Radio.Group.name, Radio.Group)
Vue.component(Radio.Button.name, Radio.Button)

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
