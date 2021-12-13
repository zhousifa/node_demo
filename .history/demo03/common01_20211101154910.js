var http = require('http');
var tools = require('./module/tools.js')
console.log(tools)
http.createServer((req, res)=> {
  console.log(123)
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});  // 解决乱码
  var api = tools.formatApi('userlist/1')
  res.write(api)
  res.end();
}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');