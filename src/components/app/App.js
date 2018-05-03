import React, { Component } from 'react';
import Card from '../card/Card.js';
import data from '../../sampleData/UIE-InterviewProject.json';
import './App.css';

class App extends Component {
  // TODO add sorting and pagination
  render() {

    let dataCards = data.map((card, index) => {
      const showBridge = card.showBridge || false;
      return (
        <Card key={index} heading={card.Heading} subHeading={card.Subheading} price={card.Price} showBridge={showBridge}/>
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
