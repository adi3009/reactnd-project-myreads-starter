import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Shelf from "./Shelf";

class MainPage extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  shelves = [
    {id: 'currentlyReading', title: 'Currently Reading'},
    {id: 'wantToRead', title: 'Want to Read'},
    {id: 'read', title: 'Read'}
  ];

  booksByShelves = {};

  arrangeBooksByShelf = (books) => {
    this.booksByShelves = {};
    books.forEach(book => {
      const shelf = book.shelf;
      if (!this.booksByShelves[shelf]) {
        this.booksByShelves[shelf] = [];
      }

      this.booksByShelves[shelf].push(book);
    });
  };

  render() {

    this.arrangeBooksByShelf(this.props.books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map(shelf => (
              <Shelf key={shelf.id} title={shelf.title} books={this.booksByShelves[shelf.id] || []}
                     onChangeBookShelf={this.props.onChangeShelf}/>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;