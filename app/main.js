import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './layout.vue';
import router from './router';

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

const ws = new WebSocket('ws://localhost:8081');

ws.onmessage = function (event) {
    console.log(event.data);
};

ws.onopen = function() {
    console.log('open');
}
