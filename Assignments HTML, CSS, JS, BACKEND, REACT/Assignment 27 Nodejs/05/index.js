const fs = require('fs');

fs.unlink('nodejs_architecture.txt', (err) =>{
    if(err) throw err;
    console.log('File Deleted Successfully');
})
