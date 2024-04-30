const express = require('express');
const router = express.Router();
const userMiddleware = require('../middleware/user-middleware');
const userController = require('../controller/user-controller');

// user signup
router.post('/signup', userMiddleware.validateSignupRequest,userController.signup);

// user login
router.post('/login',userMiddleware.validateLoginRequest ,userController.login)

module.exports = router;

