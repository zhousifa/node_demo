const fs = require('fs')
const http = require('http')
const path = require('path')

// 私有方法
let getFileMine = function(extname){
  // 同步获取数据
  let data = fs.readFileSync('./data/mime.json')
  let mimeObj = JSON.parse(data.toString())
  // 变量名属性只能通过数组的形式进行访问
  console.log(mimeObj[extname])
  return mimeObj[extname]
}

exports.static = function(req,res,staticPath){
  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`)
  pathname = myURL.pathname
  // 默认加载页面
  pathname = pathname === '/'?'/index.html':pathname
  // 获取文件后缀
  let extname = path.extname(pathname)
  // 2.通过fs模块读取文件
  if(pathname !== '/favicon.ico'){
    try {
      let data = fs.readFileSync('./' + staticPath + pathname)
      if(data){
        let mime = getFileMine(extname);
        res.writeHead(200, {'Content-Type': ''+ mime +';charset="utf-8"'});
        res.end(data);
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }
}