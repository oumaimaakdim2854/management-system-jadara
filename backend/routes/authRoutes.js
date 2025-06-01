const express = require('express');
const router = express.Router(); 
const protect= require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');

const {registerUser, loginUser} = require("../controllers/authController");
const { getUserDetails, validateStudent } = require('../controllers/userController');



router.post("/register" , registerUser);
router.post('/login', loginUser); 
router.get('/me', protect, getUserDetails);
router.put('/validate/:id', protect, isAdmin, validateStudent);



module.exports =router





