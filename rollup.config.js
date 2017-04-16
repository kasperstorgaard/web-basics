import vue from 'rollup-plugin-vue';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';
import livereload from 'rollup-plugin-livereload';

export default {
  entry: 'client/main.js',
  dest: 'public/bundle.js',
  format: 'iife',
  plugins: [
    vue(),
    nodeResolve(),
    nodeGlobals(),
    livereload({watch: 'public'})
  ],
  sourceMap: true
};