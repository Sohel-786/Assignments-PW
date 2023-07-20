const User = require('../model/user.model')
const emailValidator = require('email-validator')

exports.signup = async (req, res) => {
    try{
            var validEmail  = emailValidator.validate(req.body.email);
            console.log(validEmail, req.body.email);
            if(!validEmail){
                return res.status(400).json({
                    success: false,
                    msg : 'Please provide valid email'
                })
            }

            const user = await User.create(req.body);
            return res.status(201).json({
                success: true,
                data:  user
            })

    } catch (err) {
        
        if(err.code === 11000){
            return res.status(400).json({
                success: false,
                msg: 'Account already exists'
            })
        }

        return res.status(400).send(err.message);
    }
};


exports.login = async (req, res) => {
    try{
            const {email, password} = req.body;
            var user  = await User.findOne({email}).select('+password')

            if(!user || password !== user.password){
                return res.status(400).json({
                    success: false,
                    msg : 'Invalid Credentails'
                })
            }

            return res.status(200).json({
                success: true,
                data:  user
            })

    } catch (err) {
        
        if(err.code === 11000){
            return res.status(400).json({
                success: false,
                msg: 'Account already exists'
            })
        }

        return res.status(400).send(err.message);
    }
};
