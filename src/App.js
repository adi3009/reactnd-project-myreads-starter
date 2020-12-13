import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from "./SearchPage"
import MainPage from "./MainPage"

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
