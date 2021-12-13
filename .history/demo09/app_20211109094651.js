// 创建一个web服务器
// 1.可以访问web服务器上的网站
// 2.可以下载web服务器上的文件
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');