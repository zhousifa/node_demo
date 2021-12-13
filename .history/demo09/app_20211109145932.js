// 创建一个web服务器
// 1.可以访问web服务器上的网站
// 2.可以下载web服务器上的文件
const http = require('http');
const fs = require('fs')
http.createServer(function (req, res) {
  // 1.获取地址
  let pathname = req.url
  // 2.通过fs模块读取文件
  if(pathname !== '/favicon.ico'){
    fs.readFile('/static' + pathname,(err,data)=>{
      if(err){
        res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        res.end('这个页面不存在');
      }
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end(data);
    })
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');