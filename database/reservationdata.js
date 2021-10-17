var mongoose = require('mongoose')

var ReservationSchema = new mongoose.Schema({
    auto_id : {
        type: String,
        required: true
    },

    startDate:{
        type:String,
        required: true
    },
    endDate:{
        type:String,
        required: true
    },

    pickUp:{
        type: String,
        required: true
    },
    dropOff:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
    
})

const Reservation = mongoose.model('reservation', ReservationSchema);
module.exports = Reservation