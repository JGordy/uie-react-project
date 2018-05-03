import React, { Component } from 'react';
import Card from './Card.js';
import data from '../sampleData/UIE-InterviewProject.json';
import '../styles/App.css';

class App extends Component {

  render() {

    let dataCards = data.map((card, index) => {
      console.log(card);
      return (
        <Card key={index} heading={card.Heading} subHeading={card.Subheading} price={card.Price}/>
      );
    });

    return (
      <div className="App container">
        <div className="row">
          {dataCards}
        </div>
      </div>
    );
  }
};

export default App;
