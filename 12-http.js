const http = require('http')

const server = http.createServer((req,res)=>{
//   console.log(req)  

  if(req.url === '/')
    res.end('wwelcome to our home page')
//   res.write('welcome to homepage')
//   res.end()

if(req.url === '/about'){
    res.end('i am aryan sharma')
}

res.end(`<h1>oops!</h1>
<p>cant find the page you are looking for</p>
<a href="/">back home</a>`)
    
})


server.listen(5000)