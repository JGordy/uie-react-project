import React, { Component } from 'react';
import Card from '../card/Card.js';
import Filter from '../filter';
import PageArrows from '../pageArrows';
import data from '../../sampleData/UIE-InterviewProject.json';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sortBy: "Heading",
      activePage: 1,
      totalPages: Math.ceil(data.length / 5)
    }
  };

  sortCards = (value) => {
    return data.sort(function(a, b){
             if(a[value] < b[value]) return -1;
             if(a[value] > b[value]) return 1;
             return 0;
           });
  };

  handlePages = (value) => {
    this.setState({activePage: value});
  }

  handleUpdateState = (field) => {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  };

  createPages = (data) => {
      let pages = [];
      for (var i = 0; i < this.state.totalPages; i++) {
          pages.push(
            <div key={i} className={`page${i} row`}>{this.addPageContent(data, i + 1)}</div>
          );
      }
      return pages;
  }

  addPageContent = (data, i) => {
    let indexStart;
    let indexEnd;
    if (i === 1) {
      indexStart = 0;
      indexEnd = 4
    } else {
      indexStart = (i * 5 - 5);
      indexEnd = i * 5 - 1;
    }
    let filteredData = data.filter((obj, index) => {
      if ((index >= indexStart) && (index <= indexEnd)) {
        return index;
      }
    });

    if (indexStart === 0) {
        filteredData.unshift(data[0]);
    }

    return this.createCard(filteredData);
  }

  createCard = (data) => {
    return data.map((card, index) => {
      const showBridge = card.showBridge || false;
      return (
        <Card key={index} heading={card.Heading} subHeading={card.Subheading} price={card.Price} showBridge={showBridge}/>
      );
    });
  }

  render() {
    let data = this.sortCards(this.state.sortBy);

    return (
      <div className="App">
        <Filter handleUpdateState={this.handleUpdateState} sortBy={this.state.sortBy}/>
        <div className="row-wrapper" style={this.state.activePage === 2 ? {transform: "translateX(-100vw)"}:
         this.state.activePage === 3 ? {transform: "translateX(-200vw)"}: {}}>
          {this.createPages(data)}
        </div>

        <PageArrows activePage={this.state.activePage} handlePages={this.handlePages}/>
      </div>
    );
  };
};

export default App;
