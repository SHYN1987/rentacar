const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')

router.get('/editReservation/:id', checkAuthenticated, isAdmin,(req, res) =>{
    var id = req.params.id;


    Reservation.findById(id)
              .then(data =>{
                  if(!data){
                      res.status(404).send({ message : "Not found user with id "+ id})
                  }else{
                    res.render("reservationedit", {
                        reservation_id: id,
                        reservation: data
                    });
                  }
              })
              .catch(err =>{
                  res.status(500).send({ message: "Error retrieving user with id " + id})
              })
  })

  router.post('/editReservation/:id', (req, res)=>{
    const reservation = new Reservation({
      _id: req.params.id,
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
    })

  Reservation.findByIdAndUpdate({_id: req.params.id}, reservation)

  .then(data => {
          if(!data){
              res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
          }else{
              // spasio!
              res.status(200).send({ message : "DONE"})

          }
      });

    console.log('saved')
    res.redirect('/adminReservetion')
});

router.delete("/deleteReservation/:id", checkAuthenticated, isAdmin,(req, res) => {

  Reservation.findByIdAndRemove(req.params.id, function (err, car) {

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
