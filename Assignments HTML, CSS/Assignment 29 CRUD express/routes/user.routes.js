const express = require('express');

const router = express.Router();

const {register, login} = require('../controllers/user.controller');

// importing Middleware Function
const {login_validate} = require('../middlewares/login_validate');  
const {reg_validate} = require('../middlewares/register_validate');  

router.post('/register', reg_validate, register);
router.post('/login', login_validate, login);

module.exports = router;