import './index.css'

const GameScoreCard = props => {
  const {score, playAgainGame} = props

  return (
    <div className="score_card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy_img"
      />
      <div className="score_container">
        <p className="your_score">Your Score</p>
        <p className="total_score">{score}</p>
        <button
          type="button"
          className="play_again_btn"
          onClick={playAgainGame}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameScoreCard
