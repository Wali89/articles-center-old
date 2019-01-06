export default function articleReducer (
  state = {
    loading: false,
    topStories: [],
    channels: [],
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case 'LOADING_ARTICLES':
      return {...state, loading: true}

    case 'FETCH_TOP_STORIES':
      return {...state, loading: false, topStories: action.payload.articles}

    default:
    return state;

  }
}