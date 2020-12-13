import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";
import BookModel from "./BookModel";

class SearchPage extends Component {

  state = {
    query: '',
    books: []
  };

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({query});
    this.queryBooks(query.trim());
  };

  queryBooks = (query) => {
    BooksAPI.search(query).then((result) => {
      const books = !result || result.map === undefined ? [] : result;
      const bookModels = books.map(bookData => (new BookModel(bookData, this.handleBookShelfChange)));
      this.setState({books: bookModels});
    });
  };

  handleBookShelfChange = () => {};

  bookDataToBook = (book) => {
    return (<li key={book.id}>
      <Book bookId={book.id}
            title={book.title}
            authors={book.authors}
            imageUrl={book.imageUrl}
            currentShelf={book.shelf}
            onChangeShelf={book.onChangeShelf}/>
    </li>);
  };

  render() {

    const {query, books} = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(this.bookDataToBook)}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;