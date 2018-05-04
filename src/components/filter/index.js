import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {

  createRadios = () => {
    let options = ['Heading', 'Subheading', 'Price'];

    return options.map((option, index) => {
      return (
        <span key={index} style={{margin: '1rem'}}>
          <label style={{marginLeft: '0.5rem'}}>
            <input type='radio' className="form-check-input" name='sort' value={option} checked={this.props.sortBy === option} onChange={this.props.handleUpdateState('sortBy')}/>
            {option}
          </label>
        </span>
      );
    });
  };

  render() {
    return(
      <div className="Filter" style={{margin: '1.5rem'}}>
        <span style={{marginRight: '1rem'}}>Sort by: </span>
        {this.createRadios()}
      </div>
    );
  }
};
