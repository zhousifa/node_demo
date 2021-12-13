const mkdirp = require('mkdirp')

mkdirp('./upload02',(err)=>{
  if(err){
    return console.log(err)
  }
})