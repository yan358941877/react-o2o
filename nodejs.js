console.log('测试_dirname')
console.log(__dirname)

console.log('测试 path.resolve ')
var path = require('path')
console.log(path.resolve(__dirname, 'app/index.jsx'))

console.log('测试 process.env')
process.env.Node_ENV = 'production'
console.log(process.env.NODE_ENV)


