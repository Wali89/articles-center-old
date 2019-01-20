import React from 'react';
import Search from './search';
import LikeButton from './likeButton';

const Searches = (props) => {

  const renderSearches = () => {
    return (props.searches.map((search, index) => <Search query={search.query} id={index} likes={search.likes}/> ))
  }

    return(
      <div id="recent-searches">
        {renderSearches()}
      </div>
    )
}

export default Searches;