const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')

router.delete("/delete/:id", checkAuthenticated, isAdmin,(req, res) => {

    Car.findByIdAndRemove(req.params.id, function (err, car) {

        if (err) return res.status(500).send("User error");

        res.status(200).send("deleted");

    });
    
});

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




