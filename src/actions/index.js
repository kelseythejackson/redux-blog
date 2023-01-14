import jsonPlaceholder from '../apis/jsonPlaceholder';

export const FetchPosts = async () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response });
};
