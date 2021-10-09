const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')
const Car = require('../database/carsdata')


router.get('/reservation', (req, res) =>{
    res.render('reservation')
})

router.post('/add', (req, res) =>{
    Reservation.create({
        car: req.body.car,
        date: req.body.date,
        price: req.body.price,
    })
    console.log("jel radi")
    res.redirect('/')
})

module.exports = router