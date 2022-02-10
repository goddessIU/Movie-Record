import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index';
import { Form, FormItem, Button, Input, Col, Row, Dialog, Header, Dropdown, DropdownMenu, DropdownItem, Table, TableColumn, Container, Main, Submenu, Aside, Menu, MenuItem, MenuItemGroup, Select, Option } from 'element-ui';
import store from '../src/store/index';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dialog);
Vue.use(Header);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Container);
Vue.use(Main);
Vue.use(Submenu);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Select);
Vue.use(Option);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mounted() {
    Vue.prototype.$bus = this;
  },
  store
}).$mount('#app')
