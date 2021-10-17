const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')
const Reservation = require('../database/reservationdata')

router.get('/car/:id', checkAuthenticated,(req, res) =>{
    var id = req.params.id;
    var user = [];
    
    console.log("id" + id)

    Car.findById(id)
              .then(data =>{
                  if(!data){
                      res.status(404).send({ message : "Not found user with id "+ id})
                  }else{
                    res.render("car", {
                        car_id: id,
                        car: data
                    });
                  }
              })
              .catch(err =>{
                  res.status(500).send({ message: "Error retrieving user with id " + id})
              })
  })

  router.post('/car/:id', (req, res)=>{

    Reservation.create({
      auto_id: req.params.id,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      pickUp: req.body.pickUp,
      dropOff: req.body.dropOff,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      drivingLicence: req.body.drivingLicence,
      phone: req.body.phone,
      adress: req.body.adress,
      passportNumber: req.body.passportNumber,
      user_id: req.user._id,
      })
    res.redirect('/show')
});


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }

    res.redirect('/login')
  }


module.exports = router


