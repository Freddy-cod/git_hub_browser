// users.js - User-related routes
const express = require('express');
const { searchUsers, getUserDetails } = require('../controllers/githubController');
const router = express.Router();

router.post('/search', searchUsers);
router.get('/:username', getUserDetails);

module.exports = router;