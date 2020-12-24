import {
  SET_COMMENT_IDS,
  STORY_ERROR,
  STORY_PENDING,
  STORY_SUCCESS,
} from './actions';

const initialState = {
  story: {
    status: 'pending',
    data: null,
    error: null,
  },
  commentIds: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STORY_PENDING:
      return {
        ...state,
        story: {
          status: 'pending',
          data: null,
          error: null,
        },
      };
    case STORY_SUCCESS:
      return {
        ...state,
        story: {
          status: 'success',
          data: action.data,
          error: null,
        },
      };
    case STORY_ERROR:
      return {
        ...state,
        story: {
          status: 'error',
          data: null,
          error: action.error,
        },
      };
    case SET_COMMENT_IDS:
      return { ...state, commentIds: action.commentIds };
    default: return state;
  }
};
