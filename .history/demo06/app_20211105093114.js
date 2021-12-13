const fs = require('fs')

// 1.fs.stat 检测是文件还是文件夹
// fs.stat('./html',(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log(`是文件：${data.isFile()}`)
//   console.log(`是目录：${data.isDirectory()}`)
// })
// fs.stat('./package.json',(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log(`是文件：${data.isFile()}`)
//   console.log(`是目录：${data.isDirectory()}`)
// })

// 2 fs.mrdir 创建目录
// fs.mkdir('./css',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('创建成功')
// })

// 3 fs.writeFile 创建写入文件
fs.writeFile('./html/index.html','Hello! Node.js.',(err)=>{
  if(err){
    return console.log(err)
  }
  console.log('创建写入文件成功')
})