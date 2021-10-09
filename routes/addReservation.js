const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')

router.get('/reservation', (req, res) =>{
    res.render('reservation')
})

router.post('/reservation', (req, res) =>{
    Reservation.create({
        car: req.body.car,
        date: req.body.date,
        price: req.body.price,
    })
    console.log("Uspijesno sacuvano")
    res.redirect('/')
})

module.exports = router