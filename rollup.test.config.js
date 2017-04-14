import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
  entry: 'app/**/*.spec.js',
  dest: 'test/test.bundle.js',
  format: 'cjs',
  plugins: [
    html({include: '**/*.html'}),
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      include: ['app/**/*.js'],
      exclude: ['node_modules/**']
    }),
    postcss({extensions: ['.css', '.pcss']}),
    multiEntry()
  ],
  intro: `
    require("source-map-support").install();
    require("browser-env")();
  `,
  sourceMap: true
};