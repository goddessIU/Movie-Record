import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index';
import { Form, FormItem, Button, Input, Col, Row, Dialog } from 'element-ui';
import store from '../src/store/index';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dialog);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mounted() {
    Vue.prototype.$bus = this;
  },
  store
}).$mount('#app')
