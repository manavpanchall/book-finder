import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
      <p>Searching for books...</p>
    </div>
  );
};

export default LoadingSpinner;