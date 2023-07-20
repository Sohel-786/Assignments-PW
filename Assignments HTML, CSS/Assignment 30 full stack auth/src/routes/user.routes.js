const express = require('express');
const router = express.Router();

const {signup} = require('../controllers/user.controller');
const {signupDataValidate} = require('../middlewares/signupDataValidate');  
const {loginDatavalidate} = require('../middlewares/loginDataValidate');  

router.post('/signup', signupDataValidate, signup);
router.get('/login', loginDatavalidate, login);

module.exports = router;