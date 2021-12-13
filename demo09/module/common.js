const fs = require('fs')

exports.getMime = function(extname){
  switch(extname){
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/html'  
  }
}

exports.gtFileMine = function(extname){
  return new Promise((resolve,reject)=>{
    fs.readFile('./data/mime.json',(err,data)=>{
      if(err){
        console.log(err)
        return reject(err)
      }
      let mimeObj = JSON.parse(data.toString())
      // 变量名属性只能通过数组的形式进行访问
      console.log(mimeObj[extname])
      resolve(mimeObj[extname])
    })
  })
}
