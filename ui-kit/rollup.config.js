import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

const NODE_ENV = process.env.NODE_ENV || "development"

export default {
  input: [ 
    "./src/button.js",
    "./src/heading.js",
  ],
  output: {
    filename: "[name].js",
    dir: "dist",
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
    commonjs()
  ]
}