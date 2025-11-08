// LoadingSpinner.js - Simple loading icon
import React from 'react';

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <div style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '40px', height: '40px', animation: 'spin 1s linear infinite', margin: '0 auto' }} />
    <p>Loading...</p>
  </div>
);

export default LoadingSpinner;