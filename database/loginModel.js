var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    ime: {
        type: String,
        require: true
    }, 

    email: {
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    }
    
})

const User = mongoose.model('user', UserSchema)
module.exports = User;