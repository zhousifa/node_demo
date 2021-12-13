const http = require('http')
const routes = require('./module/routes')
const ejs = require('ejs')

http.createServer(function (req, res) {
  // console.log('req',req.headers)
  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`);
  console.log('myURL',myURL)
  // 获取请求类型
  console.log(req.method)
  // 创建静态服务
  let flag = routes.static(req,res,'static')

  pathname = myURL.pathname

  if(!flag){
    try {
      routes[pathname](req,res)
    } catch (error) {
      
    }
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');