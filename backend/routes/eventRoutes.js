const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');

router.post('/', protect, isAdmin, createEvent);
router.get('/', protect, getEvents);
router.put('/:id', protect, isAdmin, updateEvent);
router.delete('/:id', protect, isAdmin, deleteEvent);

module.exports = router;
