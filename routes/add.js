const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')

router.get('/add', (req, res) =>{
    res.render('index')
})

router.post('/add', (req, res) =>{
    Car.create({
        color: req.body.color,
        model: req.body.model,
        year: req.body.year,
        preferedPrice: req.body.preferedPrice,
        price: req.body.price,
    })
    console.log("Uspijesno sacuvano")
    res.redirect('/')
})

module.exports = router