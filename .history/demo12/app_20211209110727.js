const http = require('http')
const routes = require('./module/routes')
const ejs = require('ejs')

http.createServer(function (req, res) {
  // console.log('req',req.headers)
  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`);
  console.log('myURL',myURL)
  // 创建静态服务
  let flag = routes.static(req,res,'static')

  pathname = myURL.pathname

  if(!flag){
    if(pathname === '/login'){
      let msg = '数据库中的数据'
      ejs.renderFile('./views/login.ejs',{msg:msg},(err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        res.end(data);
      })
    }
    else if(pathname === '/register'){
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('执行注册');
    }
    else if(pathname === '/admin'){
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('处理后的业务逻辑');
    }
    else{
      res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('该页面不存在');
    }
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');