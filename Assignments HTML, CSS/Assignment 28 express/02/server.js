const express = require('express');
const app = express();

app.use(express.json());

let count = {
    'counter': 0
}

app.get('/', (req,res)=>{
    res.status(200).send(count);
})

app.get('/increment', (req,res)=>{
    count['counter']++;
    res.status(200).send(count);
})

app.get('/decrement', (req,res)=>{
   count['counter']--;
    res.status(200).send(count);
})

app.listen(2345, ()=>{
    console.log('Listening on 2345 ☻');
})