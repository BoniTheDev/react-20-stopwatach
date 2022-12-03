// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    setTimeOfWatchinSeconds: 0,
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onClickResetTheClock = () => {
    this.clearTimerInterval()

    this.setState({setTimeOfWatchinSeconds: 0})
  }

  onClickStopTheClock = () => {
    this.clearTimerInterval()
  }

  onClickStartTheClock = () => {
    this.intervalId = setInterval(this.increaseTheStopWatch, 1000)
  }

  increaseTheStopWatch = () => {
    this.setState(prevState => ({
      setTimeOfWatchinSeconds: prevState.setTimeOfWatchinSeconds + 1,
    }))
  }

  getElapsedSecondsInTimeFormat = () => {
    const {setTimeOfWatchinSeconds} = this.state

    const convertionSeconds = setTimeOfWatchinSeconds

    const minutes = Math.floor(convertionSeconds / 60)
    const seconds = Math.floor(convertionSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">StopWatch</h1>
        <div className="stopwatch-details-container">
          <div className="timer-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <p className="timer-text">Timer</p>
          </div>

          <h1 className="display-time">
            {this.getElapsedSecondsInTimeFormat()}
          </h1>
          <div className="stopwatch-controller-container">
            <button
              type="button"
              className="start-button"
              onClick={this.onClickStartTheClock}
            >
              Start
            </button>
            <button
              className="stop-button"
              type="button"
              onClick={this.onClickStopTheClock}
            >
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.onClickResetTheClock}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
