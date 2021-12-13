// 创建一个web服务器
// 1.可以访问web服务器上的网站
// 2.可以下载web服务器上的文件
const http = require('http')
const routes = require('./module/routes')

http.createServer(function (req, res) {
  // 创建静态服务
  routes.static(req,res,'static')

  // 1.获取地址
  let pathname = req.url
  // 解析地址，除去地址?后的字符
  pathname = (pathname.split('?'))[0]

  if(pathname === '/login'){
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('执行登录');
  }
  if(pathname === '/register'){
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('执行注册');
  }
  if(pathname === '/admin'){
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('处理后的业务逻辑');
  }else{
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('页面不存在');
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');