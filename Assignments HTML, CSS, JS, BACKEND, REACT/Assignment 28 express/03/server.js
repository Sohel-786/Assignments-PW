const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).send({msg:`I am homepage`});
})

app.get('/about', (req,res)=>{
res.status(200).send({msg:`I am about page`});
})

app.get('/contact', (req,res)=>{
    res.status(200).send({email:`support@pwskills.com`});
})

app.listen(2345, ()=>{
    console.log('Listening on 2345 ☻');
})