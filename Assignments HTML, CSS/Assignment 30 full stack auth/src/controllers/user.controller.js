const User = require('../model/user.model')
const emailValidator = require('email-validator')
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try{
            var validEmail  = emailValidator.validate(req.body.email);

            if(!validEmail){
                return res.status(400).json({
                    success: false,
                    msg : 'Please provide valid email'
                })
            }

            const userinfo = User(req.body);
            const user = await userinfo.save();
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

            if(!user ||  await bcrypt.compare( password , user.password)){
                return res.status(400).json({
                    success: false,
                    msg : 'Invalid Credentails'
                })
            }

            user.password = undefined;
            const token = user.jwtToken();

            const cookieOptions = {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly : true
            }

            res.cookie("token", token, cookieOptions);

            return res.status(200).json({
                success: true,
                data:  user
            })

    } catch (err) {

        return res.status(400).send(err.message);
    }
};


exports.getUser = async (req, res) =>{

    const userId = req.user.id;
    try {

        const user = await User.findById(userId);
        return res.status(200).json({
            success : true,
            User : user
        })

    } catch (err) {
        return res.status(400).send(err.message);
    }
}