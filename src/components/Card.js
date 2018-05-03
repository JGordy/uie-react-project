import React, { Component } from 'react';

export default class Card extends Component {

  render() {
    const { heading, subHeading, price } = this.props;

    return(
      <div className="Card card">
        <h2>{heading}</h2>
        <h4>{subHeading}</h4>
        <p>${price}</p>
      </div>
    );
  }
};
