import Vue from 'vue'
import App from './App.vue'

import {Input,Row,Container,Button,Select,Option} from "element-ui"

Vue.component(Input.name,Input);
Vue.component(Row.name,Row);
Vue.component(Container.name,Container);
Vue.component(Button.name,Button);
Vue.component(Select.name,Select);
Vue.component(Option.name,Option);

import VueRouter from 'vue-router'
import router from "./router/index"

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router : router,
}).$mount('#app')
