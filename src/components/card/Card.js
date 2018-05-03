import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {

  render() {
    const { heading, subHeading, price, showBridge } = this.props;
    let backgroundImage = showBridge ? {backgroundImage: `url(${bridgeImage})`} : {backgroundImage: `url(${mosaicImage})`};

    return(
      <div className="Card card">
        <div className="image" style={backgroundImage}>
          {!showBridge ? <img className="empty-image" src={emptyImage}/> : ''}
        </div>
        <div className="headings">
          <h3 className="heading text-left">{heading}</h3>
          <h5 className="sub-heading text-left">{subHeading}</h5>
        </div>
        <p className="price text-right">${price}</p>
      </div>
    );
  }
};

const bridgeImage = 'http://res.cloudinary.com/bguggie/image/upload/v1425514888/wide_ggbridge_bg_teneax.jpg';

const mosaicImage = 'http://res.cloudinary.com/bguggie/image/upload/v1425514882/darktiles_bg_gike55.jpg'

const emptyImage = 'http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png';
