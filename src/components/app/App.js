import React, { Component } from 'react';
import Card from '../card/Card.js';
import Filter from '../filter';
import data from '../../sampleData/UIE-InterviewProject.json';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sortBy: "Price",
      activePage: 1
    }
  };

  sortCards = (value) => {
    return data.sort(function(a, b){
             if(a[value] < b[value]) return -1;
             if(a[value] > b[value]) return 1;
             return 0;
           });
  };

  handleState = (value) => {
    this.setState({sortBy: value});
  }

  // TODO add sorting and pagination
  render() {
    let data = this.sortCards(this.state.sortBy);
    let dataCards = data.map((card, index) => {
      const showBridge = card.showBridge || false;
      return (
        <Card key={index} heading={card.Heading} subHeading={card.Subheading} price={card.Price} showBridge={showBridge}/>
      );
    });

    return (
      <div className="App container">
        <Filter handleState={this.handleState} sortBy={this.state.sortBy}/>
        <div className="row">
          {dataCards}
        </div>
      </div>
    );
  };
};

export default App;
