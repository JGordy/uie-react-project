import React, { Component } from 'react';
import './filter.css';

export default class Filter extends Component {

  render() {
    console.log(this.props);
    return(
      <div className="Filter">
          <span style={{margin: '1rem'}}>
            <label style={{marginLeft: '0.5rem'}}>
              <input type='radio' className="form-check-input" name='sort' value="Heading" checked={this.props.sortBy === 'Heading'} onChange={() => this.props.handleState('Heading')}/>
              Heading
            </label>
          </span>
          <span style={{margin: '1rem'}}>
            <label style={{marginLeft: '0.5rem'}}>
              <input type='radio' className="form-check-input" name='sort' value="Subheading" checked={this.props.sortBy === 'Subheading'} onChange={() => this.props.handleState('Subheading')}/>
              Subheading
            </label>
          </span>
          <span style={{margin: '1rem'}}>
              <label style={{marginLeft: '0.5rem'}}>
                <input type='radio' className="form-check-input" name='sort' value="Price" checked={this.props.sortBy === 'Price'} onChange={() => this.props.handleState('Price')}/>
                Price
              </label>
          </span>
      </div>
    );
  }
}
