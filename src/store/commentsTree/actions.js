export const COMMENTS_PENDING = 'COMMENTS_PENDING';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_ERROR = 'COMMENTS_ERROR';

export const commentPending = () => ({
  type: COMMENTS_PENDING,
  data: null,
  error: null,
});

export const commentSuccess = (comments) => ({
  type: COMMENTS_SUCCESS,
  data: comments,
  error: null,
});

export const commentError = (error) => ({
  type: COMMENTS_ERROR,
  data: null,
  error,
});
