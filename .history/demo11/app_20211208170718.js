// 创建一个web服务器
// 1.可以访问web服务器上的网站
// 2.可以下载web服务器上的文件
const http = require('http')
import routes from './module/routes'

// common.gtFileMine('.css')
http.createServer(function (req, res) {
  routes.static(req,res,'static')
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');