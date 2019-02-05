import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import Card from './Card.js';



function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø']
  const deck = []
  
    for (var i = 0; i < 8; i++) {
      let card1 = { isFlipped: false, symbol: symbols[i] }
      deck.push(card1)
      let card2 = { isFlipped: false, symbol: symbols[i] }
      deck.push(card2)
    }
  
  shuffle(deck)
  return deck
}



function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { deck: generateDeck(), pickedCards: [] }
  }

  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <Card key={index} symbol={card.symbol} isFlipped={card.isFlipped}/>
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Memory Game
          </h1>
          <h3>Match Cards to Win!</h3>
        </header>
        <div>{cardsJSX.slice(0,4)}</div>
        <div>{cardsJSX.slice(4,8)}</div>
        <div>{cardsJSX.slice(8,12)}</div>
        <div>{cardsJSX.slice(12,16)}</div>

      </div>
    );
  }
}

export default App;
