const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')

router.get('/', (req,res) =>{
    Car.find(function(err, car){
        res.render('index', {
            car : car
        })
    })


})

module.exports = router