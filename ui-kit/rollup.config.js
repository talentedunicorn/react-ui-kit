import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'

import registeredComponents from './registeredComponents'

const NODE_ENV = process.env.NODE_ENV || "development"
const outputDir = NODE_ENV === "development" ? "dist/dev": "dist/prod"

export default {
  input: registeredComponents,
  output: {
    filename: "[name].[ext]",
    dir: outputDir,
    format: "cjs"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    postcss({
      plugins: []
    })
  ]
}
