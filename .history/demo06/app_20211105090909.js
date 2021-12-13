const fs = require('fs')

// 1.fs.stat 检测是文件还是文件夹
fs.stat('./html',(err,data)=>{
  if(err){
    return console.log(err)
  }
  console.log(`是文件：${data.isFile()}`)
  console.log(`是目录：${data.isDirectory()}`)
})