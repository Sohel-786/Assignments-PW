// it will not be needed but i created because it was asked in assignment

exports.signupDataValidate = (req, res, next) => {

        const {name, email, username, password} = req.body;

        if(email && name && username && password && req.body){
            next();
        }
        else{

            res.status(400).send({msg:"All input fields are required"})
        }
    
}