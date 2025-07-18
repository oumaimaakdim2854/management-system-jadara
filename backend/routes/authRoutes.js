const express = require('express');
const router = express.Router(); 
const protect= require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');

const {registerUser, loginUser} = require("../controllers/authController");
const { validateStudent } = require('../controllers/userController');



router.post("/register" , registerUser);
router.post('/login', loginUser); 
router.put('/validate/:id', protect, isAdmin, validateStudent);



module.exports =router




