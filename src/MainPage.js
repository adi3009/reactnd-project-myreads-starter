import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from "./Shelf";

class MainPage extends Component {

  arrangeBooksByShelf = (books) => {
    const shelves = {};
    books.forEach(book => {
      const shelf = book.shelf;
      if (!shelves[shelf]) {
        shelves[shelf] = [];
      }

      shelves[shelf].push(book);
    });

    return shelves;
  };

  shelves = [
    {id: 'currentlyReading', title: 'Currently Reading'},
    {id: 'wantToRead', title: 'Want to Read'},
    {id: 'read', title: 'Read'}
  ];

  render() {

    const booksByShelf = this.arrangeBooksByShelf(this.props.books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map(shelf => (
              <Shelf key={shelf.id} title={shelf.title} books={booksByShelf[shelf.id] || []}/>
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