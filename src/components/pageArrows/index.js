import React, { Component } from 'react';
import './pageArrows.css';

export default class PageArrows extends Component {

  render() {
    return(
      <div className='page-arrows' style={{display: 'flex', justifyContent: 'space-between'}}>
         <div>
          {this.props.activePage > 1 ? <i className="material-icons"
             onClick={() => this.props.handlePages(this.props.activePage - 1)}>keyboard_arrow_left</i> : ''}
        </div>
        <div>
          {this.props.activePage < 3 ? <i className="material-icons"
             onClick={() => this.props.handlePages(this.props.activePage + 1)}>keyboard_arrow_right</i> : ''}
        </div>
      </div>
    );
  }
}
