require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const mostIgboNames = require('./routes/namesRoute');

//VARIABLE DECLARATION 
const goodConnection = 'Database connected!';
const badConnection = 'Database disconnected!';
//connecting to database
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log(`${goodConnection}`)).catch(() => console.log(`${badConnection}`));


//MIDDELWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use('/', mostIgboNames); 
 


app.listen(PORT, () => console.log(`Server is now running on localhost ${process.env.BASE_URL}`))