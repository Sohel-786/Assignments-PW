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
            return res.status(200).render('login_page')

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
            const {username, password} = req.body;
            var user  = await User.findOne({username}).select('+password')

            if(!user){

                user = await User.findOne({email:username}).select('+password');

                if(!user ||  !(await bcrypt.compare( password , user.password))) {

                    return res.status(400).json({
                        success: false,
                        msg : 'Invalid Credentails'
                    })
                }
            }
            else if( !(await bcrypt.compare( password , user.password))){


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

exports.logout = async(req, res) =>{

    try{
            const cookieOptions = {
                expires: new Date(),
                httpOnly: true
            }
            res.cookie('token', null, cookieOptions)
            res.status(200).render('signup_page');

    }catch(err){
        return res.status(400).json({
            success: false,
            msg: err.message
        })
    }
}



exports.SignUp = async (req, res) =>{

    try {

        return res.status(200).render('signup_page');

    } catch (e) {
        return res.status(400).send(err.message);
    }
}

exports.Login = async (req, res) =>{

    try {

        return res.status(200).render('login_page');

    } catch (e) {
        return res.status(400).send(err.message);
    }
}