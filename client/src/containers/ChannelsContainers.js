import React, { Component } from 'react';
import Channels from '../components/channels';
import { connect } from 'react-redux';
import { fetchSources } from '../actions/articleActions';


class ChannelsContainer extends Coponent {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
      <Channels />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {articles: state.articles.sources}
}


const mapDispatchToProps = dispatcj => {
  return {
    
  }
}