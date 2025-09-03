import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const searchBooks = async (query) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError(err.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <SearchBar onSearch={searchBooks} loading={loading} />
        
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            <div className="error-icon">⚠️</div>
            <p>Oops! {error}</p>
            <p className="error-subtext">Please try again in a moment.</p>
          </div>
        )}
        
        {!loading && !error && hasSearched && books.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No books found</h3>
            <p>Try a different search term or check your spelling.</p>
          </div>
        )}
        
        {!loading && books.length > 0 && (
          <>
            <div className="results-info">
              <h2>Found {books.length} result{books.length !== 1 ? 's' : ''}</h2>
            </div>
            <div className="books-grid">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </>
        )}

        {!hasSearched && !loading && (
          <div className="welcome-message">
            <div className="welcome-icon">📚</div>
            <h2>Discover Your Next Read</h2>
            <p>Search for books by title, author, or subject to get started.</p>
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Powered by <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">Open Library</a></p>
      </footer>
    </div>
  );
}

export default App;