const http = require('http')
const routes = require('./module/routes')

http.createServer(function (req, res) {
  // 创建静态服务
  let flag = routes.static(req,res,'static')

  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`);
  console.log('myURL',myURL)

  if(!flag){
    console.log('pathname:',pathname)
    if(pathname !== '/favicon.ico'){
      pathname = myURL.pathname.slice(1)
      console.log('其他路由',pathname)
      try {
        routes[pathname](req,res)
      } catch (error) {
        routes['error'](req,res)
      }
    }
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');