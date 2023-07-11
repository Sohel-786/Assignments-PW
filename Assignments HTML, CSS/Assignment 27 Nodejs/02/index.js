const fs = require('fs');

const buffer = new Buffer.alloc(2000);
fs.open('../01/nodejs_architecture.txt', 'r+', (err, fd)=>{
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

// appending new content to the exisiting file

let string = 'Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier. Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance fo web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.'

fs.open('../01/nodejs_architecture.txt', 'a', (err,fd)=>{
    if(err) throw err;

    fs.write(fd, string,0,'utf-8', (err1, bytes) =>{
        if(err1) throw err1;

        console.log('File Successfully Created', '\n', bytes, 'Added to the File');
    })

    fs.close(fd, (err2)=>{
        if(err2) throw err2;
    })
})



