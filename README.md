# Book Finder

A React application that allows users to search for books using the Open Library API.

## Features

- Search books by title, author, or subject
- View book details including title, author, publication year, and cover image
- Responsive design that works on mobile and desktop devices
- Clean, modern user interface

## Setup Instructions

1. Clone or download the project files
2. Navigate to the project directory in your terminal
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000`

## How to Use

1. Enter a search term in the search box (book title, author name, or subject)
2. Click the "Search" button or press Enter
3. Browse through the search results
4. Each result shows the book cover, title, author, and publication year

## Technologies Used

- React
- Open Library API
- CSS3 (with Flexbox and Grid)
- HTML5

## Deployment

This application can be deployed to various platforms:

### CodeSandbox
1. Go to https://codesandbox.io/
2. Create a new Sandbox and select "React"
3. Replace the default files with the files from this project
4. Save and share the URL

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to https://app.netlify.com/drop

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## API Reference

This application uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search):
- Endpoint: `https://openlibrary.org/search.json?q={query}`
- Documentation: https://openlibrary.org/dev/docs/api/search