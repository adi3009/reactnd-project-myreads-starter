import React from 'react';
import PropTypes from 'prop-types';

const ShelfChanger = (props) => {
  return (<div className="book-shelf-changer">
    <select defaultValue={props.currentShelf}>
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>)
};

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string.isRequired
};

export default ShelfChanger;