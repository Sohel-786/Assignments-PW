const User = require('../models/user.model');

exports.register = async (req, res) =>{
    try {
        
        
        const user = await User.create(req.body);
        res.status(200).json({
            msg: 'User Registered Successfully'
        })

    } catch (err) {
        console.log(err);
    }
}