// 创建一个web服务器
// 1.可以访问web服务器上的网站
// 2.可以下载web服务器上的文件
const http = require('http');
const fs = require('fs')
const common = require('./module/common.js')
const path = require('path')
http.createServer(function (req, res) {
  // 1.获取地址
  let pathname = req.url
  // 除去地址?后的字符
  pathname = (pathname.split('?'))[0]
  // 默认加载页面
  pathname = pathname === '/'?'/index.html':pathname

  // 获取文件后缀
  let extname = path.extname(pathname)
  // 2.通过fs模块读取文件
  if(pathname !== '/favicon.ico'){
    console.log(pathname)
    // console.log(req)
    fs.readFile('./static' + pathname,(err,data)=>{
      if(err){
        res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        res.end('这个页面不存在');
      }
      // 根据路径后缀返回content-type
      let mime = common.getMime(extname);
      res.writeHead(200, {'Content-Type': ''+ mime +';charset="utf-8"'});
      // 返回路径下文件的内容
      res.end(data);
    })
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');