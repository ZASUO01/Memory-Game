const Header = ({score, highScore}) => {
    return(
        <header className="header">
            <h1>Memory Game</h1>
            <div className="score-board">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </header>
    )
}

export default Header;