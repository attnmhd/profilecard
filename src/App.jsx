import React, { useState } from "react";
import CardMaker from "./components/CardMaker";
import Card from "./components/Card"

function App() {
  const [cards, setCards] = useState([]);

  function addCard(newCard) {
    setCards((prevCards) => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
    setCards((prevCards) => {
      return prevCards.filter((cardItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <CardMaker onAdd={addCard} />
      {cards.map((cardItem, index) => {
        return (
          <Card
            key={index}
            id={index}
            nama={cardItem.nama}
            pekerjaan={cardItem.pekerjaan}
            onDelete={deleteCard}
          />
        );
      })}
    </div>
  );
}

export default App;
