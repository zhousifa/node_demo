var http = require('http');
http.createServer((req, res)=>{
  // 1.获取地址
  let pathname = req.url
  if(pathname !== '/favicon.ico'){
    console.log(pathname)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
  }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');