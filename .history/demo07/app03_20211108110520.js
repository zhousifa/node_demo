// 读取wwwroot文件夹下的文件，并放到一个数组中
const fs = require('fs')
const path = './wwwroot'
fs.readdir(path,(err,data)=>{
  if(err){
    return console.log(err)
  }
  console.log(data)
})