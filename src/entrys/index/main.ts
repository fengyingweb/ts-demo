import 'amfe-flexible';
import Vue from 'vue';
import VueRouter from 'vue-router';
import '@/utils/class-component-hooks';
import App from '@/views/index/App.vue';
import routes from '@/views/index/router/router';
import store from '@/views/index/store/store';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import 'vant/es/style/reset.css';
import {Cell, CellGroup, NavBar} from 'vant';
Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
Vue.component(NavBar.name, NavBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
