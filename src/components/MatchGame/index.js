import {Component} from 'react'
import ImageItems from '../ImageItems/index'
import TabItems from '../TabItems/index'
import GameScoreCard from '../GameScoreCard/index'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {tabsList, imagesList} = this.props
    this.state = {
      tabInput: tabsList[0].tabId,
      quetionImg: imagesList[0],
      score: 0,
      time: 60,
      isGameOver: false,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {time, isGameOver} = this.state
    if (time === 0) {
      this.setState({isGameOver: true})
    } else if (!isGameOver) {
      this.setState(prev => ({
        time: prev.time - 1,
      }))
    }
  }

  selectedTab = tabId => {
    this.setState({tabInput: tabId})
  }

  selectedImg = id => {
    const {imagesList} = this.props
    const {quetionImg} = this.state
    if (quetionImg.id === id) {
      const randomNum = Math.floor(Math.random() * (imagesList.length - 0)) + 0
      const randomImg = imagesList[randomNum]
      this.setState(prev => ({score: prev.score + 1, quetionImg: randomImg}))
    } else {
      this.setState({isGameOver: true})
    }
  }

  playAgainGame = () => {
    this.setState({score: 0, time: 60, isGameOver: false})
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {tabInput, quetionImg, score, time, isGameOver} = this.state

    const filteredImages = imagesList.filter(
      eachImg => eachImg.category === tabInput,
    )

    const secondsTwoDigit = time > 9 ? time : `0${time}`

    return (
      <div className="bg_container">
        <nav className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="app_logo"
          />
          <ul className="score_timer">
            <li className="score_timer">
              <p className="nav_score">
                score:<span className="score">{score}</span>
              </p>
            </li>
            <li className="score_timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer_logo"
              />
              <p className="nav_timer">{secondsTwoDigit} sec</p>
            </li>
          </ul>
        </nav>
        {isGameOver && (
          <div className="app_container">
            <GameScoreCard score={score} playAgainGame={this.playAgainGame} />
          </div>
        )}
        {!isGameOver && (
          <div className="app_container">
            <img src={quetionImg.imageUrl} alt="match" className="img" />
            <ul className="tab_container">
              {tabsList.map(tabDetails => (
                <TabItems
                  key={tabDetails.tabId}
                  tabDetails={tabDetails}
                  selectedTab={this.selectedTab}
                  isActive={tabInput === tabDetails.tabId}
                />
              ))}
            </ul>
            <ul className="list_container">
              {filteredImages.map(imgDetails => (
                <ImageItems
                  key={imgDetails.id}
                  imgDetails={imgDetails}
                  selectedImg={this.selectedImg}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default MatchGame
