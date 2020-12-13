import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from "./ShelfChanger";

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {

    const book = this.props.book;

    const bookStyle = {
      width: 128,
      height: 193,
      backgroundImage: 'url("' + book.imageUrl + '")'
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookStyle}/>
          <ShelfChanger book={book} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.formattedAuthors}</div>
      </div>
    );
  }
}

export default Book;