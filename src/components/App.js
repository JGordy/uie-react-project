import React, { Component } from 'react';
import Card from './Card.js';
import data from '../sampleData/UIE-InterviewProject.json';
import '../styles/App.css';

class App extends Component {

  render() {
    console.log(data);
    return (
      <div className="App">
        <Card />
      </div>
    );
  }
};

export default App;
