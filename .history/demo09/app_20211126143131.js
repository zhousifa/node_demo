const http = require('http');
const fs = require('fs')
http.createServer((req, res)=>{
  // 1.获取地址
  let pathname = req.url
  // 
  // 过滤网站tab图标请求
  if(pathname !== '/favicon.ico'){
    console.log(pathname)
    // 设置响应头
    res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    res.end('Hello World');
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');