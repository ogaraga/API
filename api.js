require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5500;

 
 
//MIDDELWARE 
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
const namesRoute = require('./routes/namesRoute');
app.use('/', namesRoute);   
 


app.listen(PORT, () => console.log(`Server is now running on ${process.env.BASE_URL}`))