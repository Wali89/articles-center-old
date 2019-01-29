import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Searches from './searches';
import Sort from './sort';
import { getSearches } from '../actions/articleActions';

class SortSearchesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: props.searches
      
    };
  
  }

  componentDidMount(){
    this.props.getSearches()
  }

  sortyBy = () => {
    const newSearches = this.props.searches.map((a, b) => a.likes > b.likes)  
    this.setState({
      searches: newSearches 
    })
  }

  render() {
    return (
     <div> 
      <div>
      <Sort sortyBy={this.sortBy}/>
      </div>
      <div>
      <Searches searches={this.state.searches.map(search => search.val)}/>
      
      </div>
    </div>
    )
  }
}

export default SortSearchesTable;