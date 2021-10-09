const express = require('express');
const router = express.Router();
const Reservation = require('../database/carsdata')

router.get('/', (req,res) =>{
    Reservation.find(function(err, reservation){
        res.render('reservation', {
            reservation : reservation
        })
    })


})

module.exports = router