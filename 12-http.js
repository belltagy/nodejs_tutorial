const http = require('http')

const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end("welocome to our home page")
    }
    if(req.url === '/about'){
        res.end("welocome to about page")
    }

    res.end(`
    <h1>oops!</h1>
    <p> 404 error </p>
    <a href="/">Go Home </a>
    `)
})

server.listen(5000)