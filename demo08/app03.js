const fs = require('fs')

let readStream = fs.createReadStream('./a.jpg')
let writeStream = fs.createWriteStream('./data/a.jpg')

// 将读取流的数据以管道的形式复制到写入流的文件中
readStream.pipe(writeStream)