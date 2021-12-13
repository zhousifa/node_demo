const fs = require('fs')
const path = './wwwroot'
fs.readdir(path,(err,data)=>{
  if(err){
    return console.log(err)
  }
  console.log(data)
})