// meme code
const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');
const {
    createGroup,
    getGroups,
    updateGroup,
    deleteGroup
} = require('../controllers/groupController');

router.post('/', protect, isAdmin, createGroup);
router.get('/', protect, getGroups);
router.put('/:id', protect, isAdmin, updateGroup);
router.delete('/:id', protect, isAdmin, deleteGroup);

module.exports = router;
