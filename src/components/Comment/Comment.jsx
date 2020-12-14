import { React, useState } from 'react';
import './Comment.css';

function dateToString(date) {
  return new Date(date * 1000).toLocaleString('ru', {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric',

  });
}

export const Comment = ({ comment, switchComments }) => {
  const {
    by, id, text, time,
  } = comment;
  const [showComments, setShowComments] = useState(false);
  function handleShowComments() {
    setShowComments(!showComments);
    switchComments(id);
  }
  return (
    <div className="comment__container">
      <div className="comment__header">
        <p className="comment__author">{by}</p>
        <p className="comment__date">{dateToString(time)}</p>
      </div>
      <p className="comment__text" dangerouslySetInnerHTML={{ __html: text }} />

      {comment.kids && <button onClick={handleShowComments} type="button" className="comment__button">{showComments ? '[-]' : `[+ ${comment.kids.length}]`}</button>}
    </div>
  );
};
