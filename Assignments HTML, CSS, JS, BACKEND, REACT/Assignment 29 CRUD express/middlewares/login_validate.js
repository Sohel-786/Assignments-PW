exports.login_validate = (req,res,next) =>{
    const {email,password} = req.body;

    if(req.body && email && password){
        next()
    }else{
        res.status(400).send({msg:"All input fields are required"})
    }
}