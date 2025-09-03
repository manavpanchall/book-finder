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
  const subject = book.subject ? book.subject[0] : null;

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
        <div className="book-shine"></div>
      </div>
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">By {authors}</p>
        
        <div className="book-meta">
          <span className="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {firstPublishYear}
          </span>
          
          {subject && (
            <span className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {subject.length > 15 ? `${subject.substring(0, 15)}...` : subject}
            </span>
          )}
        </div>
        
        {isbn && (
          <div className="book-isbn">
            <span>ISBN: {isbn}</span>
          </div>
        )}
        
        <div className="book-actions">
          <button className="preview-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Preview
          </button>
          
          <button className="save-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;