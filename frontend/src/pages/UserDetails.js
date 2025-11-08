// UserDetails.js - User profile + repos
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { getUserDetails } from '../services/api';

const UserDetails = () => {
  const { username } = useParams();
  const [data, setData] = useState({ user: null, repos: [] });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserDetails(username);
        setData(result);
      } catch (error) {
        console.error('User fetch error:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [username]);

  if (loading) return <LoadingSpinner />;

  const { user, repos } = data;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>← Back</button>
      <h1>{user?.login}</h1>
      <img src={user?.avatar_url} alt={user?.login} style={{ width: '100px', borderRadius: '50%' }} />
      <p>{user?.bio || 'No bio available'}</p>
      <a href={user?.html_url} style={{ color: 'gray' }} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
      <h2>Repositories ({repos.length})</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {repos.map((repo) => (
          <li key={repo.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd' }}>
            <Link to={`/repos/${user.login}/${repo.name}`} style={{ color: 'blue', textDecoration: 'none' }}>
              {repo.name} - {repo.description || 'No description'}
            </Link>
            <a href={repo.html_url} style={{ color: 'gray', marginLeft: '10px' }} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;