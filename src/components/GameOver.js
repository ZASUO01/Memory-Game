const GameOver = ({onClick}) => {
    return(
        <div className="game-over">
            <div className="game-over-window">
                <h1>Game Over!</h1>
                <button onClick={onClick}>Try it again</button>
            </div>
        </div>
    )
}

export default GameOver;