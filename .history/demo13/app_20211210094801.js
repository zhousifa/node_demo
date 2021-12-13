const http = require('http')
const routes = require('./module/routes')
const ejs = require('ejs')

http.createServer(function (req, res) {
  // console.log('req',req.headers)
  const {url} = req
  const {host} = req.headers
  const myURL = new URL(url,`http://${host}`);
  pathname = myURL.pathname.slice(1)

  try {
    routes[pathname](req,res)
  } catch (error) {
    
  }

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');