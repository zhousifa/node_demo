// 和旧版API不同，不用引入node自带的url模块
// const url = require('url')

var api = "http://www.baidu.com?name=zhang&&age=20"

// 创建URL类的实例对象
var myUrl = new URL(api)

var params = myUrl.searchParams

console.log('myUrl: ',myUrl)
console.log('params: ',myUrl.searchParams)
// 获取url的name
console.log('name：'+ params.get('name'))

// 往url中插入参数sex=male
myUrl.searchParams.append('sex','male')
console.log(myUrl.href)