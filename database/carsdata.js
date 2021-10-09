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
    }
})

const Car = mongoose.model('car', CarSchema);
module.exports = Car