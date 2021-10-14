const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')

router.get('/edit/:id', checkAuthenticated, isAdmin,(req, res) =>{
    var id = req.params.id;
    var user = [];


    Car.findById(id)
              .then(data =>{
                  if(!data){
                      res.status(404).send({ message : "Not found user with id "+ id})
                  }else{
                    res.render("edit", {
                        car_id: id,
                        car: data
                    });
                  }
              })
              .catch(err =>{
                  res.status(500).send({ message: "Error retrieving user with id " + id})
              })
  })

  router.post('/edit/:id', (req, res)=>{
    const car = new Car({
        _id: req.params.id,
        color: req.body.color,
        model: req.body.model,
        year: req.body.year,
        preferedPrice: req.body.preferedPrice,
        price: req.body.price
    })

 
  Car.findByIdAndUpdate({_id: req.params.id}, car)

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


