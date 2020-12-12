import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from "./SearchPage"
import MainPage from "./MainPage"

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({
      books
    }));
  }

  render() {
    const books = this.state.books;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage books={books}/>
        )}/>
        <Route exact path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
