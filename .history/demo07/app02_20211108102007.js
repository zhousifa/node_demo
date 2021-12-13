const mkdirp = require('mkdirp')

mkdirp('./upload02').then(made =>{
  console.log(made)
})