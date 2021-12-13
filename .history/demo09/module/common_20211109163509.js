const fs = require('fs')

exports.getMime = function(extname){
  switch(extname){
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'text/html'  
  }
}

exports.gtFileMine = function(extname){
  fs.readFile('./data/mime.json',(err,data)=>{
    if(err){
      return console.log(err)
    }
    let mime = JSON.parse(data.toString())
    console.log(mime.extname)
  })
}
