import React from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";

const bookDataToBook = book => (<li key={book.id}>
  <Book bookId={book.id}
        title={book.title}
        authors={book.authors}
        imageUrl={book.imageUrl}
        currentShelf={book.shelf}
        onChangeShelf={book.onChangeShelf}/>
</li>);

const BooksGrid = ({books}) => (
  <ol className="books-grid">
    {books.map(bookDataToBook)}
  </ol>
);

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksGrid;