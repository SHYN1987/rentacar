var mongoose = require('mongoose')

var ReservationSchema = new mongoose.Schema({
    car : {
        type: String,
        required: true
    }, 

    startdate:{
        type:String,
        required: true
    },
    enddate:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const Reservation = mongoose.model('reservation', ReservationSchema);
module.exports = Reservation