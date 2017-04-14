import vue from 'rollup-plugin-vue';
import nodeResolve from 'rollup-plugin-node-resolve';
import nodeGlobals from 'rollup-plugin-node-globals';
import livereload from 'rollup-plugin-livereload';

export default {
  entry: 'app/main.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    vue(),
    nodeResolve(),
    nodeGlobals(),
    livereload()
  ],
  sourceMap: true
};