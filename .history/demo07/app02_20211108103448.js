const mkdirp = require('mkdirp')

mkdirp('./upload02',{ recursive: false }).then(made =>{
  console.log(made)
})