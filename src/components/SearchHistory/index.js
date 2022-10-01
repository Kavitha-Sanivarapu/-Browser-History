import {Component} from 'react'
import './index.css'
import SearchItem from '../SearchItem/index'

class SearchHistory extends Component {
  constructor(props) {
    super(props)

    const {initialHistoryList} = props
    this.state = {
      searchInput: '',
      historyList: initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = id => {
    const {historyList} = this.state
    const filterHistoryList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({
      historyList: filterHistoryList,
    })
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (historyList.length === 0 || searchResults.length === 0) {
      return (
        <div>
          <div className="history-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="history-logo"
            />
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                className="input-styles"
                placeholder="Search history"
              />
            </div>
          </div>
          <p className="no-data-placeholder">There is no history to show</p>
        </div>
      )
    }

    return (
      <div>
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="input-styles"
              placeholder="Search history"
            />
          </div>
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <SearchItem
              itemDetails={eachItem}
              key={eachItem.id}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SearchHistory
