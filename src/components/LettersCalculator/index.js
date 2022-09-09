import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="background">
        <div className="container">
          <div className="column">
            <h1 className="heading">
              Calculate the <br />
              Letters you
              <br /> Enter
            </h1>
            <label htmlFor="searchInput" className="ss">
              Enter the phrase
            </label>
            <input
              type="search"
              placeholder="Enter the phrase"
              className="searchInput"
              id="searchInput"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <div className="btn">
              <p className="p2">No.of letters: {searchInput.length}</p>
            </div>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="rightIm"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
