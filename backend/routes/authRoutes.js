const express = require('express');
const router = express.Router(); 
const protect= require('../middlewares/authMiddleware');

const {registerUser, loginUser} = require("../controllers/authController");
const { getUserDetails } = require('../controllers/userController');



router.post("/register" , registerUser);
router.post('/login', loginUser); 
router.get('/me', protect, getUserDetails);
// router.post("/" ,protect, getUser)

// router.get('/me', protect, (req, res) => {
//     res.status(200).json({ message: "Route protégée", user: req.user });
// });
    
module.exports =router





