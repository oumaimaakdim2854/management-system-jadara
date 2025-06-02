// routes/adminRoutes.js
const express = require('express');
const router = express.Router();

const { getPendingStudents,
    // getUserById,
    // getUserDetails,
    getAllUsers,
    validateStudent,
    deleteUser,
    updateUser } = require('../controllers/userController');


const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');

// Route protégée pour valider un étudiant
router.put('/validate-student/:id', protect, isAdmin, validateStudent);
router.get('/students/pending', protect, isAdmin, getPendingStudents);



// Route pour récupérer tous les utilisateurs (admin uniquement)
// router.get("/", getUserDetails);
// Route pour supprime tous les utilisateurs (admin uniquement)
router.delete("/:id", protect, isAdmin, deleteUser);
// Route pour modifier tous les utilisateurs (admin uniquement)
router.put("/:id", protect, isAdmin, updateUser);
// Route pour récupérer tous les utilisateurs (admin uniquement)
router.get("/", getAllUsers);


module.exports = router;

