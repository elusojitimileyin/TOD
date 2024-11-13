const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
// use express.json() to get data in JSON format
app.use(express.json());


const PORT = process.env.PORT || 5055;

// connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log('Connect to database'))
.catch(err => console.log('Error connecting'))


// add port and connect to server
app.listen(PORT, ()=> console.log('server connected') );