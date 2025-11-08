// repos.js - Repo-related routes
const express = require('express');
const { getRepoDetails } = require('../controllers/githubController');
const router = express.Router();

router.get('/:owner/:repo', getRepoDetails);

module.exports = router;