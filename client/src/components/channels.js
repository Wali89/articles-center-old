import React, { Component } from 'react';
import Channel from './channel';
import { connect } from 'react-redux';

class Channels extends Component {
  renderSources = () => {
    return (this.props.channels.map((channel, index) => <Channel key={index} id={channel.id} name={channel.name} description={channel.description} url={channel.url} category={channel.category} />))
  }
}

const mapStateToProps = state => {
  return {
    channels : state.channels
  }
}