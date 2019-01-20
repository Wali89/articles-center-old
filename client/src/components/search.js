import React, { Component } from 'react';
import { addLike } from '../containers/QueryContainer';

const Search = (props) => {


    return(
    
    <div>
       <p>{props.query} Likes:{props.likes}</p> <button data-id={props.id} onClick={addLike(props.id)} > LIKE </button>
    </div>
     
    )
  }

export default Search