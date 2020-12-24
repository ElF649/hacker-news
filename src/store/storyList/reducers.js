import {
  STORIES_ERROR,
  STORIES_ID_ERROR,
  STORIES_ID_PENDING,
  STORIES_ID_SUCCESS,
  STORIES_PENDING,
  STORIES_SUCCESS,
} from './actions';

const initialState = {
  storiesId: {
    status: 'pending',
    data: null,
    error: null,
  },
  stories: {
    status: 'pending',
    data: null,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORIES_PENDING:
      return {
        ...state,
        stories: {
          status: 'pending',
          data: null,
          error: null,
        },
      };
    case STORIES_SUCCESS:
      return {
        ...state,
        stories: {
          status: 'success',
          data: action.data,
          error: null,
        },
      };
    case STORIES_ERROR:
      return {
        ...state,
        stories: {
          status: 'error',
          data: null,
          error: action.error,
        },
      };

    case STORIES_ID_PENDING:
      return {
        ...state,
        storiesId: {
          status: 'pending',
          data: null,
          error: null,
        },
      };
    case STORIES_ID_SUCCESS:
      return {
        ...state,
        storiesId: {
          status: 'success',
          data: action.data,
          error: null,
        },
      };
    case STORIES_ID_ERROR:
      return {
        ...state,
        storiesId: {
          status: 'error',
          data: null,
          error: action.error,
        },
      };
    default: return state;
  }
};
