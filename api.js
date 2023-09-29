require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5500;

//VARIABLE DECLARATION 
const goodConnection = 'Database connected!';
const badConnection = 'Database disconnected!';
//connecting to database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log(`${goodConnection}`)).catch(() => console.log(`${badConnection}`));

 
//MIDDELWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const namesRoute = require('./routes/namesRoute');
app.use('/', namesRoute);   
 


app.listen(PORT, () => console.log(`Server is now running on ${process.env.BASE_URL}`))