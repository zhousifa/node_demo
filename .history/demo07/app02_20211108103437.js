const mkdirp = require('mkdirp')

mkdirp('./upload02',{ recursive: true }).then(made =>{
  console.log(made)
})