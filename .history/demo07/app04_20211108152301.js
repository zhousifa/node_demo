// 读取wwwroot文件夹下的目录，并放到一个数组中
const fs = require('fs')
const path = './wwwroot'
let dirArr = []

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
  fs.readdir(path,async (err,data)=>{
    if(err){
      return console.log(err)
    }
    for(let i = 0;i < data.length;i++){
      if(await isDir(path + '/' + data[i])){
        dirArr.push(data[i])
      }
    }
    console.log('dirArr：',dirArr)
  })
}

main()