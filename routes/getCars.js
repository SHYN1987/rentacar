const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')
const Reservation = require('../database/reservationdata')

router.get('/admin', checkAuthenticated, isAdmin,(req,res) =>{
    Car.find(function(err, car){
        res.render('index', {
            car : car
        })
    })


})

router.get('/adminReservetion', checkAuthenticated, isAdmin,(req,res) =>{
  Car.find(function(err, cars){

    Reservation.find(function(err, reservation){
      res.render('adminReservetion', {
       reservation : reservation,
       cars: cars
             
      })
    })
  })
})


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }

    res.redirect('/login')
  }

  function isAdmin(req, res, next){
    if(req.isAuthenticated() && (req.user.email==='starCar@starCar.com')){
        return next();
    }
    res.redirect('/')
}

module.exports = router
