import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";

class MainPage extends Component {

  state = {
    books: []
  };

  shelves = [
    {id: 'currentlyReading', title: 'Currently Reading'},
    {id: 'wantToRead', title: 'Want to Read'},
    {id: 'read', title: 'Read'}
  ];

  booksByShelves = {};

  fetchBooks = () => BooksAPI.getAll().then(books => this.setState({
    books
  }));

  /**
   * Update shelf of a book in local books state and clears shelves
   *
   * @param bookId
   * @param shelf
   */
  handleChangeShelf = (bookId, shelf) => {
    const newBooks = this.state.books.map(book => {
      const newBook = {...book};
      if (newBook.id === bookId) {
        newBook.shelf = shelf
      }

      return newBook
    });

    this.booksByShelves = {};

    this.setState({books: newBooks});
  };

  arrangeBooksByShelf = (books) => {
    books.forEach(book => {
      const shelf = book.shelf;
      if (!this.booksByShelves[shelf]) {
        this.booksByShelves[shelf] = [];
      }

      this.booksByShelves[shelf].push(book);
    });
  };

  componentDidMount() {
    this.fetchBooks();
  }

  render() {

    this.arrangeBooksByShelf(this.state.books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map(shelf => (
              <Shelf key={shelf.id} title={shelf.title} books={this.booksByShelves[shelf.id] || []}
                     onChangeBookShelf={this.handleChangeShelf}/>
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