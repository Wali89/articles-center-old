import React, { Component } from 'react';
import QueryInput from '../components/queryInput';
import QueryArticles from '../components/queryArticles';
import Searches from '../components/searches';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';
import { getSearches } from '../actions/articleActions';

export function addLike(index) {
  const { searchLike } = this.state.searches[index].likes
  this.setState({...this.state.searches[index], likes: searchLike++})
};

class QueryContainer extends Component {
  state = {

  }


  componentDidMount(){
    this.props.getSearches()
  }



  render() {
    return (
      <div className="search">
        <div id="query">
          <QueryInput searchArticles={this.props.searchArticles} />

        </div>

        <div>
          <Searches searches={this.props.searches}/>
        </div>  
        <div>
          <QueryArticles results={this.props.results} numResults={this.props.numResults} searchDone={this.props.searchDone}/> 
        </div>

         
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    results: state.results,
    query: state.query,
    likes: state.likes,
    numResults: state.numResults,
    searchDone: state.searchDone,
    searches: state.searches
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchArticles: (query) => dispatch(searchArticles(query)),
    getSearches: () => dispatch(getSearches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer);