import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Shelf extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  bookDataToBook = (book) => <li key={book.id}>
    <Book title={book.title} authors={book.authors} imageUrl={book.imageLinks.thumbnail} currentShelf={book.shelf}/>
  </li>;

  render() {
    const {title, books} = this.props;

    return (<div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(this.bookDataToBook)}
          </ol>
        </div>
      </div>
    </div>)
  }
}

export default Shelf;