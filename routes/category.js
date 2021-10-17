const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')
const Car = require('../database/carsdata')


router.get('/premium', (req,res) =>{
    Car.find({category: "premium"},function(err, car){
        res.render('categoryCar', {
            car : car
        })
    })
})

router.get('/middle', (req,res) =>{
    Car.find({category: "middle"},function(err, car){
        res.render('categoryCar', {
            car : car
        })
    })
})


router.get('/suv', (req,res) =>{
    Car.find({category: "suv"},function(err, car){
        res.render('categoryCar', {
            car : car
        })
    })
})


router.get('/monovolumen', (req,res) =>{
    Car.find({category: "monovolumen"},function(err, car){
        res.render('categoryCar', {
            car : car
        })
    })
})

router.get('/economy', (req,res) =>{
    Car.find({category: "economy"},function(err, car){
        res.render('categoryCar', {
            car : car
        })
    })
})



module.exports = router
