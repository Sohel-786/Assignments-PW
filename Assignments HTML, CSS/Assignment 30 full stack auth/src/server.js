const express = require('express');
const app = express();

app.use(express.json());

app.listen(process.env.PORT, (req, res)=>{
    console.log('Listening on 2345 ☺');
})