import { useState } from 'react';
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
    <div className='card' key={card.id}>
      <div className='card_header'>
        <div>{card.title}</div>
        <button className='delete_btn' onClick={() => deleteCard(card)}>X</button>
      </div>
      <div>{card.description}</div>
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

    setCards([...cards, newCard]);
    setTitle("");
    setDescription("");
  }

  return (
    <div>
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
        <button>Submit</button>
      </form>

      {cards.length === 0 ? "You have completed everything for today" : listItem}
    </div>
  );
}

export default App;
