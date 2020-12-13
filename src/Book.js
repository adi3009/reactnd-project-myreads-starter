import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from "./ShelfChanger";

class Book extends Component {

  static propTypes = {
    bookId: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    currentShelf: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  authorsToString = (authors) => authors.reduceRight((acc, author) => `${acc}, ${author}`);

  render() {

    const {bookId, imageUrl, title, authors, currentShelf, onChangeShelf} = this.props;

    const bookStyle = {
      width: 128,
      height: 193,
      backgroundImage: 'url("' + imageUrl + '")'
    };

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookStyle}/>
          <ShelfChanger bookId={bookId} currentShelf={currentShelf} onShelfChange={(shelf) => onChangeShelf(bookId, shelf)}/>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{this.authorsToString(authors)}</div>
      </div>
    );
  }
}

export default Book;