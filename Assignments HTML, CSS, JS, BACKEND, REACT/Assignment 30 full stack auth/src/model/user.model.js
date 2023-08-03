const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
}, {
    versionKey: false,
    timestamps : true
})


userSchema.methods = {
    jwtToken() {
        return JWT.sign(
            {id: this._id, email: this.email},
            process.env.SECRET,
            {expiresIn: '24h'}
        )
    }
}

userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    return next();
})

module.exports = mongoose.model('user', userSchema);