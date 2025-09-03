import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId 
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` 
    : '/placeholder-book-cover.png';
  
  const title = book.title || 'Unknown Title';
  const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
  const firstPublishYear = book.first_publish_year || 'Unknown';
  const isbn = book.isbn ? book.isbn[0] : null;

  return (
    <div className="book-card">
      <div className="book-cover">
        <img 
          src={coverUrl} 
          alt={`Cover of ${title}`}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150x200?text=No+Cover';
          }}
        />
      </div>
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">By: {authors}</p>
        <p className="book-year">First published: {firstPublishYear}</p>
        {isbn && <p className="book-isbn">ISBN: {isbn}</p>}
      </div>
    </div>
  );
};

export default BookCard;