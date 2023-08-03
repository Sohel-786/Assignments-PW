const fs = require('fs');

let string = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. the platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet."


fs.writeFileSync('nodejs_architecture.txt', string);

const buffer = new Buffer.alloc(2000);
fs.open('nodejs_architecture.txt', 'r+', (err, fd)=>{
    if(err) throw err;

    fs.read(fd,buffer,0,buffer.length,0, (err1, bytes)=>{
        if(err1) throw err1;

        if(bytes > 0){
            console.log(buffer.slice(0,bytes).toString());
        }
    })

    fs.close(fd, (err2) =>{
        if(err2) throw err2;
    })
})

