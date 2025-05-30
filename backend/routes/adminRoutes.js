// routes/adminRoutes.js
const express = require('express');
const router = express.Router();

const { getPendingStudents, validateStudent, getAllUsers, deleteUser, updateUser } = require('../controllers/userController');


const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');

// Route protégée pour valider un étudiant
router.put('/validate-student/:id', auth, isAdmin, validateStudent);
router.get('/students/pending', auth, isAdmin, getPendingStudents);

// Route pour récupérer tous les utilisateurs (admin uniquement)
router.get("/",  getAllUsers); 

// Route pour supprime tous les utilisateurs (admin uniquement)
router.delete("/:id", deleteUser);

// Route pour modifier tous les utilisateurs (admin uniquement)
router.put("/users/:id", updateUser); 

module.exports = router;

