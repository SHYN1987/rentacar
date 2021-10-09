const express = require('express');
const router = express.Router();
const Reservation = require('../database/reservationdata')

router.get('/edit/:id',(req, res) =>{
    var id = req.params.id;


    Reservation.findById(id)
              .then(data =>{
                  if(!data){
                      res.status(404).send({ message : "Not found user with id "+ id})
                  }else{
                    res.render("edit", {
                        reservation_id: id,
                        car: data
                    });
                  }
              })
              .catch(err =>{
                  res.status(500).send({ message: "Error retrieving user with id " + id})
              })
  })

  router.post('/edit/:id', (req, res)=>{
    const car = new Reservation({
        car: req.body.car,
        startdate: req.body.startdate,
        enddate: req.body.enddate
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
    res.redirect('/')
});


module.exports = router