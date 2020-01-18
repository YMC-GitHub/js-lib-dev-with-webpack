//----------config dir----------
//it is a config for project dir contrutor
//----------config dir----------
'use strict'
const path = require('path')
const rootePath = path.resolve(__dirname, '..')
const resolve = file => path.resolve(rootePath, file)
module.exports = {
  //save the source code (for dev)
  src: resolve('src'),
  //save the test source code (for test)
  test: resolve('test'),
  //save the build ouput code by webpack
  dist: resolve('dist')
}
