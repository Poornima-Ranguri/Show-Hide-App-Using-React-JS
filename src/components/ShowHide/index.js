import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  onClickingFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickingLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="home">
        <h1 className="heading">Show/Hide</h1>
        <div className="btns-container">
          <button
            className="btn-1"
            type="button"
            onClick={this.onClickingFirstName}
          >
            Show/Hide Firstname
          </button>
          <button
            className="btn-2"
            type="button"
            onClick={this.onClickingLastName}
          >
            Show/Hide Lastname
          </button>
        </div>

        <div className="card-container">
          <div>{isFirstName ? <p className="first-name"> Joe</p> : ''} </div>
          <div>{isLastName ? <p className="last-name">Jonas</p> : ''}</div>
        </div>
      </div>
    )
  }
}

export default ShowHide
