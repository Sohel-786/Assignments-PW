exports.reg_validate= (req,res,next) =>{
    const {name,email,password} = req.body;

    if(req.body && name && email && password){
        next()
    }else{
        res.status(400).send({msg:"all input fields are required"})
    }
}