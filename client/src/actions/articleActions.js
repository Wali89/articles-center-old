export function fetchTopStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/topStories')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_TOP_STORIES', payload: articles}))
  }
}



export function fetchChannels() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/channels')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_CHANNELS', payload: articles}))
  }
}

export function searchChannelArticles() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/channels/${channel}/${page}')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_CHANNEL_ARTICLES', payload: articles}))
  }
}