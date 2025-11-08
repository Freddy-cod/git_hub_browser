// githubController.js - Handles GitHub API calls
const axios = require('axios');

const GITHUB_BASE_URL = 'https://api.github.com';

// Search users by query
const searchUsers = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query required' });

    const response = await axios.get(`${GITHUB_BASE_URL}/search/users`, {
      params: { q: query, per_page: 10 }
    });
    res.json(response.data.items); // Array of user objects
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

// Get user details + repos
const getUserDetails = async (req, res) => {
  try {
    const { username } = req.params;
    // Fetch user profile
    const userResponse = await axios.get(`${GITHUB_BASE_URL}/users/${username}`);
    // Fetch repos (top 10 for brevity)
    const reposResponse = await axios.get(`${GITHUB_BASE_URL}/users/${username}/repos`, {
      params: { per_page: 10, sort: 'updated' }
    });

    res.json({
      user: userResponse.data, // avatar_url, bio, etc.
      repos: reposResponse.data // Array of repo objects
    });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

// Get repo details + last 5 commits
const getRepoDetails = async (req, res) => {
  try {
    const { owner, repo } = req.params;
    // Fetch repo info
    const repoResponse = await axios.get(`${GITHUB_BASE_URL}/repos/${owner}/${repo}`);
    // Fetch last 5 commits
    const commitsResponse = await axios.get(`${GITHUB_BASE_URL}/repos/${owner}/${repo}/commits`, {
      params: { per_page: 5 }
    });

    res.json({
      repo: repoResponse.data, // created_at, description, etc.
      commits: commitsResponse.data.map(commit => commit.commit.message) // Just descriptions
    });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

module.exports = { searchUsers, getUserDetails, getRepoDetails };