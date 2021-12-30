const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES

const medicamentosRoute= require('./routes/medicamentos');
app.use('/medicamentos', medicamentosRoute);

//ROUTES
app.get('/', (req,res)=>{
    res.send('CASA');
});


//CONNECT TO DB
mongoose.connect('mongodb+srv://admin:admin@cluster0.valxi.mongodb.net/test', () =>
    console.log('Conectado a la DB')
 );

//LISTEN
app.listen(3000);