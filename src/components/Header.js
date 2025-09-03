import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-background">
        <div className="header-shape header-shape-1"></div>
        <div className="header-shape header-shape-2"></div>
        <div className="header-shape header-shape-3"></div>
      </div>
      
      <div className="container">
        <div className="header-content">
          <h1>
            <span className="header-icon">📚</span>
            Book Finder
          </h1>
          <p>Discover your next great adventure between pages</p>
        </div>
        
        <div className="header-stats">
          <div className="stat">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Books</span>
          </div>
          <div className="stat">
            <span className="stat-number">100K+</span>
            <span className="stat-label">Authors</span>
          </div>
          <div className="stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Genres</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;