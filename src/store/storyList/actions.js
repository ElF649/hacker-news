export const STORIES_PENDING = 'STORIES_PENDING';
export const STORIES_SUCCESS = 'STORIES_SUCCESS';
export const STORIES_ERROR = 'STORIES_ERROR';
export const STORIES_ID_PENDING = 'STORIES_ID_PENDING';
export const STORIES_ID_SUCCESS = 'STORIES_ID_SUCCESS';
export const STORIES_ID_ERROR = 'STORIES_ID_ERROR';

export const storiesIdPending = () => ({
  type: STORIES_ID_PENDING,
  data: null,
  error: null,
});

export const storiesIdSuccess = (storiesId) => ({
  type: STORIES_ID_SUCCESS,
  data: storiesId,
  error: null,
});

export const storiesIdError = (error) => ({
  type: STORIES_ID_ERROR,
  data: null,
  error,
});

export const storiesPending = () => ({
  type: STORIES_PENDING,
  data: null,
  error: null,
});

export const storiesSuccess = (stories) => ({
  type: STORIES_SUCCESS,
  data: stories,
  error: null,
});

export const storiesError = (error) => ({
  type: STORIES_ERROR,
  data: null,
  error,
});
