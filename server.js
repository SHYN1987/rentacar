const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs');

// MONGO
mongoose.connect("mongodb+srv://carRent:carRent@cluster0.vlsd7.mongodb.net/Rent", { useNewUrlParser: true, useUnifiedTopology: true });


//Routes 
const adddCar = require('./routes/add')
const getCars = require('./routes/getCars')
const editCar = require('./routes/edit')
const deleteCar = require('./routes/deleteCar')
app.use('/', adddCar)
app.use('/', getCars)
app.use('/', editCar)
app.use('/', deleteCar)


const addReservation = require('./routes/addReservation')
const getReservation = require('./routes/getReservation')
const editReservation = require('./routes/editReservation')
const deleteReservation = require('./routes/deleteReservation')
app.use('/reservation', addReservation)
app.use('/reservation', getReservation)
app.use('/reservation', editReservation)
app.use('/reservation', deleteReservation)





app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is runing :P")
})