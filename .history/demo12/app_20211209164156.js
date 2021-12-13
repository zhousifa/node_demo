const http = require('http')
const routes = require('./module/routes')
const ejs = require('ejs')

http.createServer(function (req, res) {
  // console.log('req',req.headers)
  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`);
  console.log('myURL',myURL)
  // 获取请求类型
  console.log(req.method)
  // 创建静态服务
  let flag = routes.static(req,res,'static')

  pathname = myURL.pathname

  if(!flag){
    if(pathname === '/news'){
      let query = myURL.searchParams
      let page = query.get('page')
      let id = query.get('id')
      console.log('page:',page)
      console.log('id:',id)
      console.log('query:',query)
      res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      res.end('get请求获取成功');
    }
    else if(pathname === '/login'){
      ejs.renderFile('./views/form.ejs',{
        msg:msg,
        list:list
      },(err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        res.end(data);
      })

      // let msg = '数据库中的数据'
      // let list = [
      //   {
      //     title:'新闻1'
      //   },
      //   {
      //     title:'新闻2'
      //   },
      //   {
      //     title:'新闻3'
      //   },
      // ]
      // ejs.renderFile('./views/login.ejs',{
      //   msg:msg,
      //   list:list
      // },(err,data)=>{
      //   res.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
      //   res.end(data);
      // })
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