const express = require('express');
const app = express();

app.use(express.json());

app.get('/random', (req, res)=>{

    let random = (Math.random() * 10) * (Math.random() * 10);

    res.status(200).send({random:Math.ceil(random)});
})


app.listen(2345, ()=>{
    console.log('Listening on 2345 ☻');
})