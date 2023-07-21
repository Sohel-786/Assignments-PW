// it will not be needed but i created because it was asked in assignment


exports.loginDatavalidate = (req, res, next) => {

    const {username, password} = req.body;

    if(username && password && req.body){
        next();
    }
    else{

        res.status(400).send({msg:"All input fields are required"})
    }

}