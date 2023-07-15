require('dotenv').config();

const express = require('express');
const connectToDB = require('./config/db');
const userController = require('./routes/user.routes')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}));
connectToDB();

app.use('/', userController);

module.exports = app;