// 读取wwwroot文件夹下的目录，并放到一个数组中
const fs = require('fs')
const path = './wwwroot'
let dirArr = []

// 在函数中定义一个返回的Promise
function isDir(path){
  return new Promise((resolve,reject)=>{
    fs.stat(path,(err,stats)=>{
      if(err){
        console.log(err)
        return reject(err)
      }
      if(stats.isDirectory()){
        resolve(true)
      }
      else{
        resolve(false)
      }
    })
  })
}

function main(){
  // 在使用返回Promise的函数的外面一层函数使用async
  fs.readdir(path,async (err,data)=>{
    if(err){
      return console.log(err)
    }
    // 这个过程isDir函数中的fs.stat本来是异步的，但是经过async和await的处理后，就变得像同步代码一样执行和阅读
    for(let i = 0;i < data.length;i++){
      // 在使用返回Promise的函数使用await
      if(await isDir(path + '/' + data[i])){
        dirArr.push(data[i])
      }
    }
    console.log('dirArr：',dirArr)
  })
}

main()