import {useState, useEffect} from 'react';
import Card from './Card';
import cardsData from './cardData';


const GameBoard = ({score, highScore, onPlay}) => {
    const [cards, setCards] = useState([])
    
    const shuffleCards = (arr) => {
        for(let i = 0; i < arr.length; i++){
            arr = arr.sort(() => Math.random() -0.5)
        }
    }
    
    useEffect(() => {
        const arr = [...cardsData];
        shuffleCards(arr);
        setCards(arr);
    },[score, highScore]);

    
    return(
        <div className="game-board">
            {cards.map((card) => 
            <Card 
                key={card.id}
                img={card.img} 
                name={card.name}
                width={card.width}
                bg={card.background}
                cc={card.cardColor}
                onPlay={onPlay}
            />)}
        </div>
    )
}

export default GameBoard;