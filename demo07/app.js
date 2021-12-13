// 判断服务器上是否有upload这个目录，如果没有就创建这个目录，如果有的话就不操作。 （用于图片上传）
const fs = require('fs')
const path = './upload'

fs.stat(path,(err,data)=>{
  if(err){
    // 创建目录
    return mkdir(path)
  }
  else if(data.isDirectory()){
    console.log(`${path} 文件夹已存在`)
  }
  else if(data.isFile()){
    // 如果存在相同名称的文件的话，就需要先删除该文件，再执行创建目录操作
    fs.unlink(path,(err)=>{
      if(!err){
        mkdir(path)
      }
      else{
        console.log('请检测传入的值是否正确')
      }
    })
  }
})

function mkdir(path){
  fs.mkdir(path,(err)=>{
    if(err){
      return console.log(err)
    }
    console.log(`创建 ${path} 目录成功`)
  })
}