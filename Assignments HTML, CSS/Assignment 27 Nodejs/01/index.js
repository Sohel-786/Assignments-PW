const fs = require('fs');

let string = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. the platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet."


// 'a' is used to append new content in file instead of overriding the existing content

fs.open('nodejs_architecture.txt', 'a', (err,fd)=>{
    if(err) throw err;

    // fs.open() will create and open a new empty file if the defined file doesn't exists

    fs.write(fd,string,0,'utf-8', (err1, bytes) =>{
        if(err1) throw err1;

        console.log('File Successfully Created', '\n', bytes, 'Added to the File');
    })

    // this will close the file
    fs.close(fd, (err2)=>{
        if(err2) throw err2;
    })
})