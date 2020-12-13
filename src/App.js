import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from "./SearchPage"
import MainPage from "./MainPage"
import * as BooksAPI from "./BooksAPI";
import BookModel from "./BookModel";

class BooksApp extends React.Component {

  state = {
    books: []
  };

  bookDataToBookModel = (bookData) => new BookModel(bookData, this.handleChangeShelf);

  fetchBooks = () => BooksAPI.getAll().then(books => this.setState({
    books: books.map(this.bookDataToBookModel)
  }));

  findBook = (bookId) => this.state.books.find(book => book.id === bookId);

  /**
   * Update shelf of a book in local books state
   *
   * @param changedBook
   * @param shelf
   */
  handleChangeShelf = (changedBook, shelf) => {
    const currentBooks = [];
    let isNew = true; // is the changed book not in state, when book shelf changed on search page
    this.state.books.forEach(book => {
      const newBook = this.bookDataToBookModel({...book});
      if (newBook.id === changedBook.id) {
        newBook.shelf = shelf;
        isNew = false;
      }

      currentBooks.push(newBook);
    });

    if (isNew) {
      changedBook.shelf = shelf;
      currentBooks.push(changedBook);
    }

    this.setState({books: currentBooks});
  };

  setBookShelfOnSearchResults = (books) => {
    return books.map(bookData => {
      const book = this.bookDataToBookModel(bookData);
      const shelfBooks = this.findBook(book.id);
      if (shelfBooks) {
        book.shelf = shelfBooks.shelf;
      }

      return book;
    })
  };

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/"
               render={() => (<MainPage books={this.state.books}/>)}/>
        <Route exact path="/search" render={() => (<SearchPage onSearchComplete={this.setBookShelfOnSearchResults}/>)}/>
      </div>
    )
  }
}

export default BooksApp
