const express = require('express');
const mongoose = require('mongoose')

const route = require('./routes/index')
const connectDatabase = require('./config/database')
const app = express();
app.use(express.json())
global.__basedir = __dirname;
app.use('/api/internshala',route);
app.use('/api/user',user)

app.use('/uploads',express.static('/uploads'));
connectDatabase()
app.listen(3000,()=> console.log('Listening at portnumber 3000'));

