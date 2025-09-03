import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books by title, author, or subject..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="search-tips">
        <p>Try searching for: <em>Harry Potter, Stephen King, Science Fiction, etc.</em></p>
      </div>
    </div>
  );
};

export default SearchBar;