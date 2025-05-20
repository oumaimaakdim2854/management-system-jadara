// meme code
const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');
const {
    createProgram,
    getPrograms,
    updateProgram,
    deleteProgram
} = require('../controllers/programControllers');

router.post('/', protect, isAdmin, createProgram);
router.get('/', protect, getPrograms);
router.put('/:id', protect, isAdmin, updateProgram);
router.delete('/:id', protect, isAdmin, deleteProgram);

module.exports = router;