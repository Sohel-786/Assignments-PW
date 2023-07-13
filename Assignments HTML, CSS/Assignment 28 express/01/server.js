const mongoosh = require('mongoosh');
const http = require('http');

const connect = ()=>{
    return mongoosh.connect('mongodb://127.0.0.1:27017/products');
}

const server = http.createServer( (req,res)=>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader = 'Content-Type: text/html';
        res.end('<h1>We:come to Men & Women Dummy Data</h1>')
    }
})

server.listen(2345,()=>{
    connect();
    console.log('Listening on 2345 ☺');
})