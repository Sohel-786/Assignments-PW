const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required :[true, 'Name is Required'],
        maxLength: 30,
        trim: true,
        capitalize:true
    }, 

    username: {
        type: String,
        required:[true, 'Username is Required'],
        maxLength: 15,
        unique: [true, 'Choose Unique Username'],
        trim: true
    },

    email: {
        type: String,
        required:[true, 'Email is Required'],
        unique: [true, 'Already registered in another account'],
        trim: true,
        lowercase : true
    },

    password: {
        type: String,
        required: [true, 'Password is Required'],
        minLength : [8, 'The password must be 8 characters long'],
        select : false
    },

    bio: {
        type: String,
        trim: true
    },
})

module.exports = mongoose.model('user', userSchema);