import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './layout.vue';
import {router} from './router';
import {WebSocketManager} from './services/websocket/websocket-manager';

const wsm = new WebSocketManager();

/**
 * Setup plugins.
 */
Vue.use(VueRouter);

/**
 *  Construct the main instance.
 */
new Vue({
  el: '#main',
  render(createElement) {
    return createElement(Layout)
  },
  router
});
