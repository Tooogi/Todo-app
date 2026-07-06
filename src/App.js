import { useState, form, label, input, button } from 'react';
import './App.css';

function App() {

  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const deleteCard = (cardToRemove) => {
    const removeCard = cards.filter(card => card.id !== cardToRemove.id)
    setCards(removeCard);
  }

  const listItem = cards.map(card => 
    <div style={{border: "1px solid #000"}} key={card.id}>
      <div>{card.title}</div> 
      <div>{card.description}</div>
      <button onClick={() => deleteCard(card)}>X</button>
    </div>
  )

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    const newCard = {
      id: new Date(),
      title: title,
      description: description
    };

    console.log("What is in: ", newCard);

    setCards([...cards, newCard]);

    setTitle("");
    setDescription("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input name='title'
            value={title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          <input name='description'
            value={description}
            onChange={handleDescriptionChange} 
          />
        </label>
        <input type='submit' />
      </form>

      {cards.length === 0 ? "You have completed everything for today" : listItem}
    </div>
  );
}

export default App;
