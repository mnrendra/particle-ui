import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    postcss({
      config: { path: './postcss.config.js' },
      extensions: ['.css'],
      minimize: true,
      inject: { insertAt: 'top' }
    })
  ],
  external: [
    'react',
    'react-dom'
  ]
}
