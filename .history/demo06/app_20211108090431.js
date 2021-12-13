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
// fs.writeFile('./html/index.html','Hello! Node.js.',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('创建写入文件成功')
// })

// fs.writeFile('./html/index.html','别说了',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('创建写入文件成功')
// })

// 4 fs.appendFile 追加写入文件内容
// fs.appendFile('./css/base.css','body{margin:0;padding:0;}',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('appendFile 成功')
// })

// fs.appendFile('./css/base.css','\n.el-button{padding:10px;}',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('appendFile 成功')
// })

// 5 fs.readFile 读取文件内容
// fs.readFile('./html/index.html',(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log(data)
//   console.log(data.toString())
// })

// 6 fs.readdir 读取目录
// fs.readdir('./html',(err,data)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log(data)
// })

// 7 fs.rename 重命名/移动 文件
// fs.rename('./css/index.css','./html/test.css',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('移动/重命名文件成功')
// })

// 8 fs.rmdir 删除目录
// fs.rmdir('./html/js',(err)=>{
//   if(err){
//     return console.log(err)
//   }
//   console.log('删除目录成功')
// })

// 9 fs.unlink 删除文件
fs.unlink('./html/js/index.js',(err)=>{
  if(err){
    return console.log(err)
  }
  console.log('删除文件成功')
})
fs.unlink('./html/js/test.js',(err)=>{
  if(err){
    return console.log(err)
  }
  console.log('删除文件成功')
})

