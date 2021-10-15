const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')
const Car = require('../database/carsdata')


router.get('/show', checkAuthenticated,(req,res) =>{
  Car.find(function(err, cars){
    Reservation.find({user_id: req.user._id}, function(err, reservation){
      res.render('showReservetions', {
       reservation : reservation,
       cars: cars
             
      })
    })
})
 
 
})

// router.get('/show', checkAuthenticated, async(req,res) =>{
//   const rez = []
//  Reservation.find({user_id: req.user._id}, function(err, reservation){
//     // var nesto = Car.findOne(reservation.auto_id)
//     // console.log("CAR: " + nesto)
//     // console.log(reservation.auto_id)
//     // res.render('showReservetions', {
//     //   reservation : reservation,
     
//     // })

//     reservation.forEach(res => {
//      Car.find({_id: res.auto_id}, function(err, kola){
//       rez.push(kola)
//        })
       

//     })
//     await rez
//     console.log(rez)
//   })
// })
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }

    res.redirect('/login')
  }
module.exports = router