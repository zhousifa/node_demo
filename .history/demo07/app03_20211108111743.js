// 读取wwwroot文件夹下的目录，并放到一个数组中
const fs = require('fs')
const path = './wwwroot'
let dirArr = []
fs.readdir(path,(err,data)=>{
  if(err){
    return console.log(err)
  }
  console.log(data)
  for(let i = 0;i < data.length;i++){
    // 判断该文件是否是目录
    fs.stat(path + '/' + data[i],(error,stats)=>{
      if(stats.isDirectory()){
        dirArr.push(data[i])
      }
    })
    
  }
  console.log('dirArr：',dirArr)
})