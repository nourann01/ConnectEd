const express = require('express');
const router = express.Router();
const userController = require('./UserController');
const authMiddleware = require('../Middleware/authenticate');
const { validateCreateUser , validateLogin, validateProfileUpdate, validatePasswordChange } = require('../Middleware/AccountValidation');

router.get('/', userController.getAllUsers); // public
router.post('/', validateCreateUser, userController.createUser); // public
router.post('/login', validateLogin, userController.loginUser); // public

router.put('/profile', authMiddleware,validateProfileUpdate, userController.updateUserProfile); // protected
router.put('/password', authMiddleware,validatePasswordChange, userController.changePassword);   // protected
router.post('/:id/follow', authMiddleware, userController.toggleFollow);        // protected

module.exports = router;
