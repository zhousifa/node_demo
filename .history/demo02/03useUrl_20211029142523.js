// 引入node自带的url模块
const url = require('url')

var api = "http://www.baidu.com?name=zhang&&age=20"

var myUrl = new URL(api)

var params = myUrl.searchParams

console.log('myUrl: ',myUrl)
console.log('params: ',myUrl.searchParams)
console.log('name：'+ params.get('name'))

myUrl.searchParams.append('sex','male')
console.log(myUrl.href)