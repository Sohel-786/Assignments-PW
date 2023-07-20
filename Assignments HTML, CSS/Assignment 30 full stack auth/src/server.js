require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const connect  = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const userRoutehandler = require('./routes/user.routes');

app.use('/', userRoutehandler);

app.listen(process.env.PORT, (req, res)=>{
    connect();
    console.log('Listening on 2345 ☺');
})