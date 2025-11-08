// RepoDetails.js - Repo info + commits
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { getRepoDetails } from '../services/api';

const RepoDetails = () => {
  const { owner, repo } = useParams();
  const [data, setData] = useState({ repo: null, commits: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRepoDetails(owner, repo);
        setData(result);
      } catch (error) {
        console.error('Repo fetch error:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, [owner, repo]);

  if (loading) return <LoadingSpinner />;

  const { repo: repoData, commits } = data;

  return (
    <div style={{ padding: '20px' }}>
      <Link to={`/users/${owner}`} style={{ color: 'blue' }}>← Back to User</Link>
      <h1>{repoData?.name}</h1>
      <p>{repoData?.description || 'No description'}</p>
      <p>Created: {new Date(repoData?.created_at).toLocaleDateString()}</p>
      <p>Last Updated: {new Date(repoData?.updated_at).toLocaleDateString()}</p>
      <a href={repoData?.html_url} style={{ color: 'gray' }} target="_blank" rel="noopener noreferrer">View on GitHub →</a>
      <h2>Last 5 Commits</h2>
      <ul>
        {commits.map((commit, index) => (
          <li key={index}>{commit}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDetails;