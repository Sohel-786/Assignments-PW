const User = require('../models/user.model');

exports.register = async (req, res) =>{
    try {
        const {name,email,password} = req.body;


        if(!name || !email || !password){
            return res.status(400).json({   
                Success : false,
                Error: 'all input fields are required'
            })
        }

        const userExists = await User.findOne({email}); 
        
        if(userExists){
            return res.status(400).json({
                Success : false,
                Error: 'User already exists'
            })
        }

        const user = await User.create(req.body);
        res.status(201).json({
            msg: 'User Registered Successfully'
        })

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}

exports.login = async (req, res) =>{
    try {

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({   
                Success : false,
                Error: 'all input fields are required'
            })
        }

        const userExists = await User.findOne({email}); 
        
        if(!userExists){
            return res.status(400).json({
                msg: 'No account associated with this email'
            })
        }

        if(userExists.password == password){
            return res.status(200).json({
                msg: 'User Login Successfully'
            });
        }else{
            return res.status(400).json({
                msg: 'Password is wrong'
            }); 
        }

    } catch (err) {
        console.log(err);
        res.status(500).send(err.message)
    }
}
