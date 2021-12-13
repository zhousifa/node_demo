const fs = require('fs')
let str = ''
let count = 0

// 创建读取流
let readStream = fs.createReadStream('./data/input.txt')

// 获取文件中的字符，并且计算读取次数
readStream.on('data',(data)=>{
  str = str + data
  count++
})

// 输出读取结果和次数
readStream.on('end',()=>{
  console.log('str：',str)
  console.log('count：',count)
})

readStream.on('error',(err)=>{
  console.log('error：',err)
})