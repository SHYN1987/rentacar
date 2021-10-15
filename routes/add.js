const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')
const User = require('../database/loginModel')
const multer = require('multer');

//----------------- Slika ---------------------

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/images')
    },

    filename: function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({
    storage:storage,
    limits:{    
        fieldSize:1024*1024*3
    }
})


router.get('/add', checkAuthenticated,isAdmin,(req, res) =>{
    res.render('add')
    
})

router.post('/add', upload.single('image'),(req, res) =>{
    Car.create({
        image: req.file.filename,
        color: req.body.color,
        model: req.body.model,
        year: req.body.year,
        preferedPrice: req.body.preferedPrice,
        price: req.body.price,
        seat: req.body.seat,
        fueltype: req.body.fueltype,
        fuelconsumption: req.body.fuelconsumption,
        transmission: req.body.transmission,
        category: req.body.category
    })
    console.log("Uspijesno sacuvano")
    res.redirect('/')
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
