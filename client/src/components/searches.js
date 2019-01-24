import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './likeButton';
import Search from './search';

 const Searches = (props) => {
    
    let searches = props.searches.map(search =>
    <h3 key={search.id}>
      <li>{ search.query } <Search likes={search.likes} id={search.id} /> </li>
    </h3>
    )

      return (
        <div>
        {searches}
        </div>
      )
      
}

export default Searches;