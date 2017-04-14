import Vue from 'vue';
import Layout from './layout.vue';

new Vue({
  el: '#main',
  render(createElement) {
    return createElement(Layout)
  }
});