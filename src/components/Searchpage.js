import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Debounce } from 'react-throttle'

import SkyLight from 'react-skylight'

//Components 
import * as BooksAPI from '../api/BooksAPI'
import Book from './Book'
import ConstantsList from '../util/constants'
import BookInfoModal from '../templates/Templates'
import Loader from '../components/GridLoader'

class Searchpage extends React.Component {
  state = {
    query: '',
    searchLoading: false,
    results: [],
    selected: {},
  }

  constructor(props) {
    super(props)

    this.updateQuery = this.updateQuery.bind(this);
    this.showModal = this.showModal.bind(this);
    this.search = this.search.bind(this);
    this.findBookWithShelves = this.findBookWithShelves.bind(this);
  }

  updateQuery = (query) => {
    this.setState({ query },
      () => {
        if (query.length > 0) {
          this.search(this.state.query, 40)
        } else {
          this.setState({ results: [] })
        }
      })
  }

  showModal = (id) => {
    this.setState({
      selected: this.state.results.find(book => book.id === id)
    })

    this.animated.show()
  }

  search = (query, maxResults) => {
    this.setState({
      searchLoading: true
    })

    BooksAPI.search(query, maxResults).then(results => {
      results = (results.hasOwnProperty('error')) ?
        [] : this.mapResult(results, this.findBookWithShelves);

      this.setState({
        searchLoading: false,
        results: results
      })
    })
  }

  mapResult(results, checker) {
    return results.map(checker);
  }

  findBookWithShelves(book) {
    let bookFound = this.props.booksOnShelves.find((bookOnshelf) => (book.id === bookOnshelf.id));
    return (bookFound !== undefined) ? bookFound : book;
  }

  render() {
    const { searchLoading, results, selected } = this.state

    let books

    if (Object.prototype.toString.call(results) === '[object Array]') {
      books = results.map((book) => {
        return (
          <Book key={book.id} book={book} moveToShelf={this.props.moveToShelf} showModal={this.showModal} />
        )
      })
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            <Debounce time="500" handler="onChange">
              <input type="text" placeholder="Search by title or author" onChange={(e) => this.updateQuery(e.target.value)} />
            </Debounce>
          </div>
        </div>

        <div className="search-books-results">
          <Loader loading={searchLoading} color="#2e7c31" size="16px" margin="4px" className="loader" />
          <div className="loader">{(Object.prototype.toString.call(results) === '[object Array]') ? `Showing ${books.length} results` : ''}<br /><br /></div>
          <div className="loader">{(Object.prototype.toString.call(results) === '[object Object]') ? `No results` : ''}<br /><br /></div>
          <ol className="books-grid">
            {books}
          </ol>
        </div>

        <SkyLight dialogStyles={ConstantsList.BIGGREENDIALOG} hideOnOverlayClicked ref={ref => this.animated = ref}>
          <BookInfoModal selected={selected} />
        </SkyLight>
      </div>
    )
  }
}

Searchpage.propTypes = {
  moveToShelf: PropTypes.func.isRequired,
  booksOnShelves: PropTypes.array.isRequired
}

export default Searchpage
