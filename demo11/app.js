// 创建一个web服务器
// 1.可以访问web服务器上的网站
// 2.可以下载web服务器上的文件
const http = require('http')
const routes = require('./module/routes')

http.createServer(function (req, res) {
  // console.log('req',req.headers)
  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`);
  console.log('myURL',myURL)
  // 创建静态服务
  let flag = routes.static(req,res,'static')

  pathname = myURL.pathname

  if(!flag){
    if(pathname === '/login'){
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('执行登录');
    }
    else if(pathname === '/register'){
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('执行注册');
    }
    else if(pathname === '/admin'){
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('处理后的业务逻辑');
    }
    else{
      res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('该页面不存在');
    }
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');