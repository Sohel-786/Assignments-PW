exports.loginDatavalidate = (req, res, next) => {

    const {email, password} = req.body;

    if(email && password && req.body){
        next();
    }
    else{

        res.status(400).send({msg:"All input fields are required"})
    }

}