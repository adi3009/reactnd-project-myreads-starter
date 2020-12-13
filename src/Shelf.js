import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from "./BooksGrid";

const Shelf = ({title, books}) => (<div>
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BooksGrid books={books}/>
    </div>
  </div>
</div>);


Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Shelf;