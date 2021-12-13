const fs = require('fs')
let str = ''
let count = 0

let readStream = fs.createReadStream('./data/input.txt')

readStream.on('data',(data)=>{
  str = str + data
  count++
})

readStream.on('end',()=>{
  console.log('str：',str)
  console.log('count：',count)
})

readStream.on('error',(err)=>{
  console.log('error：',err)
})