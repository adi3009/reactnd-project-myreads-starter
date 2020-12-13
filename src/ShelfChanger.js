import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

const changeShelf = (newShelf, bookId, onSuccess) => {
  BooksAPI.update({id: bookId}, newShelf).then(onSuccess(newShelf));
};

const ShelfChanger = (props) => {
  const {bookId, currentShelf, onShelfChange} = props;

  return (<div className="book-shelf-changer">
    <select value={currentShelf} onChange={(event) => (changeShelf(event.target.value, bookId, onShelfChange))}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>)
};

ShelfChanger.propTypes = {
  bookId: PropTypes.string.isRequired,
  currentShelf: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default ShelfChanger;