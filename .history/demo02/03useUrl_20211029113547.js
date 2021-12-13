const url = require('url')

var api = "http://www.baidu.com?name=zhang&&age=20"

var myUrl = new URL(api)

var params = myUrl.searchParams

console.log(myUrl)
console.log(myUrl.searchParams)
console.log('姓名：'+ params.get('name'))

myUrl.searchParams.append('sex','male')
console.log(myUrl.href)