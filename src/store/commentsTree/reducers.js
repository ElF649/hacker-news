import {
  COMMENTS_ERROR,
  COMMENTS_PENDING,
  COMMENTS_SUCCESS,
} from './actions';

const initialState = {
  comments: {
    status: 'pending',
    data: null,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_PENDING:
      return {
        ...state,
        comments: {
          status: 'pending',
          data: null,
          error: null,
        },
      };
    case COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          status: 'success',
          data: action.data,
          error: null,
        },
      };
    case COMMENTS_ERROR:
      return {
        ...state,
        comments: {
          status: 'error',
          data: null,
          error: action.error,
        },
      };
    default: return state;
  }
};
