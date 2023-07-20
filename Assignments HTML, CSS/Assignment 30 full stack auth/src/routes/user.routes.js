const express = require('express');
const router = express.Router();

const {signup, login, getUser} = require('../controllers/user.controller');


// middlewares
const {signupDataValidate} = require('../middlewares/signupDataValidate');  

const {loginDatavalidate} = require('../middlewares/loginDataValidate');  

const {authenticateUser} = require('../middlewares/authenticateUser');  

router.post('/signup', signupDataValidate, signup);
router.post('/login', loginDatavalidate, login);
router.get('/', authenticateUser, getUser);

module.exports = router;