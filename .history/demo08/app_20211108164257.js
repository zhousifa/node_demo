const fs = require('fs')
let str = ''

for(let i = 0;i < 500;i++){
  str = str + '这是数据库的数据，需要保存起来hhhhhhhhhhhh\n'
}

let writeStream = fs.createWriteStream('./data/input.txt')

writeStream.write(str)

// 标记写入完成，不加的话无法触发finish事件
writeStream.end()

writeStream.on('finish',()=>{
  console.log('写入完成')
})
