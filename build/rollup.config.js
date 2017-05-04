var rollup = require('rollup')
var resolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var babel = require('rollup-plugin-babel')
var eslint = require('rollup-plugin-eslint')
var css = require('rollup-plugin-postcss')

rollup.rollup({
  entry: 'src/index.js',
  plugins: [
    css({
      extensions: [ '.css' ],
    }),
    eslint({
      throwError: true,
      exclude: [
        'src/styles/**',
        'node_modules/**'
      ]
    }),
    resolve({
      extensions: ['.js']
    }),
    commonjs(),
    babel({ exclude: 'node_modules/**' })
  ]
}).then(function (bundle) {
  bundle.write({
    format: 'cjs',
    dest: 'lib/index.js'
  })
}).catch(function (e) { process.exit(1) })

