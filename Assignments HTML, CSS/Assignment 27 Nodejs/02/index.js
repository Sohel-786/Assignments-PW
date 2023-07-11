const fs = require('fs');

const buffer = new Buffer.alloc(2000);
fs.open('./01/nodejs_architecture.txt', 'r+', (err, fd)=>{
    if(err) throw err;

    fs.read(fd,buffer,0,buffer.length,0, (err, bytes)=>{
        if(err) throw err;

        if(bytes > 0){
            
        }
    })
})