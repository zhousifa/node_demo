const http = require('http');

http.createServer((req,res)=>{
    if(req.url !== '/favicon.ico'){
        // console.log(req);   // 获取url
        // console.log(req.url);   // 获取url
        const params = new URLSearchParams(req.url.slice(2))
        console.log(params)
        console.log(params.get('name'))
        console.log(params.get('age'))
    }

    // 设置响应头
    // 状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});  // 解决乱码
    res.write("<head><meta charset='utf-8'></head>")

    // console.log(req)

    res.end() // 结束响应,如果没写，浏览器刷新按钮会一直转
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/');