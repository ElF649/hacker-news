export const STORY_PENDING = 'STORY_PENDING';
export const STORY_SUCCESS = 'STORY_SUCCESS';
export const STORY_ERROR = 'STORY_ERROR';
export const SET_COMMENT_IDS = 'SET_COMMENT_IDS';

export const storyPending = () => ({
  type: STORY_PENDING,
  data: null,
  error: null,
});

export const storySuccess = (story) => ({
  type: STORY_SUCCESS,
  data: story,
  error: null,
});

export const storyError = (error) => ({
  type: STORY_ERROR,
  data: null,
  error,
});

export const setCommentIds = (commentIds) => ({
  type: SET_COMMENT_IDS,
  commentIds,
});
