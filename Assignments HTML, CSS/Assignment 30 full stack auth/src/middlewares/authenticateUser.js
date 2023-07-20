const JWT = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) =>{
    //verfiy token
    // inject user info in req

    const token  = (req.cookies && req.cookies.token) || null;

    if(!token){
        return res.status(400).json({
            success : false,
            msg : 'Not Authorized'
        })
    }
    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email};

     } catch (err) {

        return res.status(400).send(err.message);
     }

     next();
}