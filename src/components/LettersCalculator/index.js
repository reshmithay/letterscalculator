// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {typeInput: ''}

  updateInput = event => {
    const {value} = event.target

    this.setState({typeInput: value})
  }

  render() {
    const {typeInput} = this.state
    return (
      <div className="app-container">
        <div className="calculator-container">
          <div className="letters-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="typeInputBox" className="label">
                Enter the phrase
              </label>
              <input
                type="text"
                className="type-input"
                id="typeInputBox"
                value={typeInput}
                onChange={this.updateInput}
                placeholder="Enter the phrase"
              />
            </div>
            {typeInput.length !== 0 ? (
              <p className="no-of-letters">No.of letters: {typeInput.length}</p>
            ) : (
              <p className="no-of-letters">No.of Letters: 0</p>
            )}
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
