const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

app.set('view engine', 'ejs');
app.use('/uploads', express.static('uploads'));

//Assets
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/images', express.static(path.resolve(__dirname, "assets/images")))

// MONGO
mongoose.connect("mongodb+srv://carRent:carRent@cluster0.vlsd7.mongodb.net/Rent", { useNewUrlParser: true, useUnifiedTopology: true });

//------------------- Passport -----------------------
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Routes 
const adddCar = require('./routes/add')
const getCars = require('./routes/getCars')
const editCar = require('./routes/edit')
const deleteCar = require('./routes/deleteCar')
const loginUser = require('./routes/login')
const showCar = require('./routes/car')
const showReservetion = require('./routes/showReservetion')
const categoryCar = require('./routes/category')
app.use('/', adddCar)
app.use('/', getCars)
app.use('/', editCar)
app.use('/', deleteCar)
app.use('/', loginUser)
app.use('/', showCar)
app.use('/', showReservetion)
app.use('/', categoryCar)

const addReservation = require('./routes/addReservation')
const getReservation = require('./routes/getReservation')
const editReservation = require('./routes/editReservation')
const deleteReservation = require('./routes/deleteReservation')
app.use('/', addReservation)
app.use('/', getReservation)
app.use('/', editReservation)
app.use('/', deleteReservation)





app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server is runing :P")
})
