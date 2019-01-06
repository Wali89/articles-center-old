export function fetchTopStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTICLES'});
    return fetch('/api/headlines')
      .then(response => response.json())
      .then(articles => dispatch({type: 'FETCH_TOP_STORIES', payload: articles}))
  }
}