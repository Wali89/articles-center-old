import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Sort extends React.Component {
  sort(field){
    this.props.sortBy(field);

  }

  render() {
    return (
      <div className="sort">
        
        <div id='likes' onClick={this.sort.bind(this,'likes')}>
        </div>
      </div>
    )
  }


}

export default Sort;