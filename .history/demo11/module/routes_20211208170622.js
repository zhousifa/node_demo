const fs = require('fs')
const http = require('http')
const path = require('path')

exports.gtFileMine = function(extname){
  // 同步获取数据
  let data = fs.readFileSync('./data/mime.json')
  let mimeObj = JSON.parse(data.toString())
  // 变量名属性只能通过数组的形式进行访问
  console.log(mimeObj[extname])
  return mimeObj[extname]
}

exports.static = function(req,res,staticPath){
  // 1.获取地址
  let pathname = req.url
  // 解析地址，除去地址?后的字符
  pathname = (pathname.split('?'))[0]
  // 默认加载页面
  pathname = pathname === '/'?'/index.html':pathname

  // 获取文件后缀
  let extname = path.extname(pathname)
  // 2.通过fs模块读取文件
  if(pathname !== '/favicon.ico'){
    console.log(pathname)
    // console.log(req)
    fs.readFile('./' + staticPath + pathname,(err,data)=>{
      if(err){
        res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        res.end('这个页面不存在');
      }
      // 根据路径后缀返回content-type
      // let mime = common.getMime(extname);
      let mime = gtFileMine(extname);
      res.writeHead(200, {'Content-Type': ''+ mime +';charset="utf-8"'});
      // 3.返回路径下文件的内容
      res.end(data);
    })
  }
}