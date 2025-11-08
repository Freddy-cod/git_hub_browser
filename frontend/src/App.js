// App.js - Main app with routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import RepoDetails from './pages/RepoDetails';
import './App.css'; // Basic styles for attractiveness

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<UserDetails />} />
          <Route path="/repos/:owner/:repo" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;