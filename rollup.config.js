import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';

import postcss from 'rollup-plugin-postcss';

export default {
  entry: 'app/main.js',
  dest: 'dist/main.bundle.js',
  format: 'iife',
  plugins: [
    html({
      include: '**/*.html'
    }),
    babel({
      include: '**/*.js',
      exclude: ['node_modules/**']
    }),
    postcss({
      extensions: ['.css', '.pcss']
    })
  ],
  sourceMap: 'inline'
};