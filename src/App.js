import './App.css';

function App() {

  const cards = [
    {
      "id": 1,
      "title": "First card",
      "description": "This is the description of the first card"
    },
    {
      "id": 2,
      "title": "Second card",
      "description": "This is the description of the second card"
    },
  ]

  const listItem = cards.map(card => <div>{card.title} {card.description}</div>)

  return (
    <div className="App">
      {listItem}
    </div>
  );
}

export default App;
