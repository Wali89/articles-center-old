import React, { Component } from 'react';
import QueryInput from '../components/queryInput';
import QueryArticles from '../components/queryArticles';
import Searches from '../components/searches';
import { connect } from 'react-redux';
import { searchArticles } from '../actions/articleActions';
import { getSearches } from '../actions/articleActions';
import { debug } from 'util';
import SortSearchesTable from '../components/sortSearchesTable';
import Search from '../components/search';


class QueryContainer extends Component {
  
  constructor (props) {
    super(props) 
    this.toggleSortLikes = this.toggleSortLikes.bind(this)
    this.state = {
      searches: [],
      query: props.query,
      numResults: ''

    }
  }
  
  componentDidMount(){
    this.props.getSearches()
  }

  componentDidUpdate(prevProps){
    if (this.props.searches !== prevProps.searches) {
      this.setState({
        ...this.state, searches: this.props.searches
      })
    }
  }


  sortyByLikes = () => {
    const oldSearches = this.state.searches
    let newSearchList = oldSearches.sort((a, b) => a.likes > b.likes)  
    this.setState({
      ...this.state, searches: newSearchList 
    })
  }

  toggleSortLikes (event) {
    this.sortyByLikes()
  }


  render() {
    
    
    return (
      <div className="search">
        <div id="query">
          <QueryInput searchArticles={this.props.searchArticles} />

        </div>

        <div>
          <button onClick={this.toggleSortLikes}> Sort </button> 
          <Searches searches={this.state.searches}/>
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