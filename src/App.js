import { useState } from 'react';
import './App.css';

function App() {

  const [cards, setCards] = useState([]);
  
  const listItem = cards.map(card => <div>{card.title} {card.description}</div>)

  return (
    <div className="App">
      {cards.length === 0 ? "You have completed everything for today" : listItem}
    </div>
  );
}

export default App;
