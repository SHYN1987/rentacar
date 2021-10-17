const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')
const Car = require('../database/carsdata')


router.get('/', (req,res) =>{
    Car.find(function(err, car){
        res.render('homepage', {
            car : car
        })
    })
})

router.get('/reservation', (req,res) =>{
  Car.find(function(err, car){
      res.render('reservation', {
          car : car
      })
  })
})

router.get('/show', checkAuthenticated,(req,res) =>{

  Reservation.find({user_id: req.user._id}, function(err, reservation){
    res.render('showReservetions', {
      reservation : reservation
    })
  })
})
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }

    res.redirect('/login')
  }
module.exports = router
