const http = require('http');

http.createServer((req,res)=>{
  // 屏蔽图标的请求
  if(req.url !== '/favicon.ico'){
      // 截取/?name=zhang&age=25后面的参数创建URLSearchParams实例对象
      const params = new URLSearchParams(req.url.slice(2))
      console.log('params: ',params)
      console.log(params.get('name'))
      console.log(params.get('age'))
  }

  // 设置响应头
  // 状态码是200，文件类型是html，字符集是utf-8
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});  // 解决乱码
  res.write("<head><meta charset='utf-8'></head>")

  res.end() // 结束响应,如果没写，浏览器刷新按钮会一直转
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');