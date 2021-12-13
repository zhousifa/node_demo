var http = require('http');
http.createServer((req, res)=> {
  console.log(123)
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});  // 解决乱码
  res.write("1")
  res.end();
}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');