import React, { Component } from 'react';


class Channel extends Component {

  render() {
    return(
      <div className="channel">
        <h3> <Link to={{
          pathname: 'channels/${this.props.id}',
          state: {
            name: this.props.name
          }
        }}>{this.props.name} </Link> </h3>
        <p> {this.props.name}</p>
        <br> </br>
      </div>
    )
  }
}

export default Source;