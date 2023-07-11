const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url == '/'){
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>')
    }

    res.end();
})

server.listen(2347, ()=>{
    console.log('Listening on 2347');
})