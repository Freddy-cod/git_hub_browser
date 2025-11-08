// SearchBox.js - User search input
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchUsers } from '../services/api';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    try {
      const data = await searchUsers(query);
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          style={{ width: '70%', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Search</button>
      </form>
      {loading && <p>Loading results...</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {results.map((user) => (
          <li key={user.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
            <img src={user.avatar_url} alt={user.login} style={{ width: '50px', borderRadius: '50%' }} />
            <a href={`/users/${user.login}`} style={{ color: 'blue', marginLeft: '10px', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate(`/users/${user.login}`); }}>
              {user.login}
            </a>
            <a href={user.html_url} style={{ color: 'gray', marginLeft: '10px' }} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;