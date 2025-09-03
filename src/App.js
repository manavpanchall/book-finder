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
        <SearchBar onSearch={searchBooks} />
        
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
          </div>
        )}
        
        {!loading && !error && hasSearched && books.length === 0 && (
          <div className="no-results">
            <p>No books found. Try a different search term.</p>
          </div>
        )}
        
        {!loading && books.length > 0 && (
          <>
            <div className="results-info">
              <p>Found {books.length} results</p>
            </div>
            <div className="books-grid">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;