const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [30, 'Name must be less than 30 chars']
    },
    
    email:{
        type: String,
        required : [true, 'Email is required'],
        unique : true
    },

    password:{
        type: Number,
        required : [true, 'Password is Required'],
    }
}, {
    versionKey:false
})

module.exports = mongoose.model('user', userSchema)