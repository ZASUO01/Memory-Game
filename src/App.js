import Header from './components/Header';
import GameOver from './components/GameOver';
import GameBoard from './components/GameBoard';
import {useState} from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [chosenCards, setChosen] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const addScore = () => {
    setScore(score + 1);
  }

  const handleHighScore = () => {
    setHighScore(score);
  }

  const addNewChosen = (card) => {
    setChosen((prevChosen) => [...chosenCards, card]);
  }

  const resetGame = () => {
    setScore(0);
    setChosen([]);
  }
  
  const gameFlow = (cardName) => {
    if(chosenCards.includes(cardName) || score === 6){
      handleHighScore();
      resetGame();
      handleGameOver();
    }else{
      addNewChosen(cardName);
      addScore();
    }
  }

  const handleGameOver = () => {
    setGameOver(!gameOver);
  }

  return (
    <div className="App">
        <Header score={score} highScore={highScore} />
        {gameOver && (<GameOver onClick={handleGameOver}/>)}
        <GameBoard score={score} highScore={highScore} onPlay={gameFlow}/>
    </div>
  );
}

export default App;
