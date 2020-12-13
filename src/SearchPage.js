import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BooksGrid from "./BooksGrid";

class SearchPage extends Component {

  static propTypes = {
    onSearchComplete: PropTypes.func.isRequired
  };

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
      const bookModels = this.props.onSearchComplete(books);
      this.setState({books: bookModels});
    });
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
          <BooksGrid books={books}/>
        </div>
      </div>
    );
  }
}

export default SearchPage;