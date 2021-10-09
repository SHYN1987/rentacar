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
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        price: req.body.price,
    })
    console.log("jel radi")
    res.redirect('/')
})

module.exports = router