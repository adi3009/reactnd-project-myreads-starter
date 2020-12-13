import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

const changeShelf = (newShelf, bookId, onSuccess) => {
  BooksAPI.update({id: bookId}, newShelf).then(onSuccess(newShelf));
};

const ShelfChanger = ({book}) => {

  return (<div className="book-shelf-changer">
    <select value={book.shelf} onChange={(event) => (changeShelf(event.target.value, book.id, book.onChangeShelf))}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>)
};

ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired
};

export default ShelfChanger;