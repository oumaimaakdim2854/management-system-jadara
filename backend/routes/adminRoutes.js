// routes/adminRoutes.js
const express = require('express');
const router = express.Router();

const { validateStudent } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');

// Route protégée pour valider un étudiant
router.put('/validate-student/:id', auth, isAdmin, validateStudent);

module.exports = router;