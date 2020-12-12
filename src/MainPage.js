import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from "./Book";

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

  bookDataToBook = (book) => <li key={book.id}>
    <Book title={book.title} authors={book.authors} imageUrl={book.imageLinks.thumbnail} currentShelf={book.shelf}/>
  </li>;

  render() {

    const booksByShelf = this.arrangeBooksByShelf(this.props.books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksByShelf.currentlyReading && booksByShelf.currentlyReading.map(this.bookDataToBook)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksByShelf.wantToRead && booksByShelf.wantToRead.map(this.bookDataToBook)}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {booksByShelf.read && booksByShelf.read.map(this.bookDataToBook)}
                </ol>
              </div>
            </div>
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