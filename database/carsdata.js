var mongoose = require('mongoose')

var CarSchema = new mongoose.Schema({
    color : {
        type: String,
        required: true
    }, 

    model:{
        type:String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    preferedPrice: {
        type: Number,
        required: true
    },

    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    seat:{
        type: String,
        required: true
    },
    
    fuelconsumption:{
        type: String,
        required: true
    },
    transmission:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    fueltype:{
        type: String,
        required: true
    }
    
})

const Car = mongoose.model('car', CarSchema);
module.exports = Car