const express = require('express');
const router = express.Router();
const Car = require('../database/carsdata')

router.delete("/delete/:id",(req, res) => {

    Car.findByIdAndRemove(req.params.id, function (err, car) {

        if (err) return res.status(500).send("User error");

        res.status(200).send("deleted");

    });
    
});

module.exports = router







