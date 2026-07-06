import { useState, form, label, input } from 'react';
import './App.css';

function App() {

  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const listItem = cards.map(card => <div>{card.title} {card.description}</div>)

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    const newCard = {
      title: title,
      description: description
    };

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
