import { React, useEffect, useState } from 'react';
import { getItemById } from '../../utils/HackerNewsAPI';
import { Comment } from '../Comment/Comment';
import './CommentsTree.css';

export const CommentsTree = ({ commentIds, listClass, id }) => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const responseComments = await Promise.all(
      commentIds.map(getItemById),
    );
    setComments(responseComments);
  }, [commentIds]);

  function switchComments(elemid) {
    const item = document.getElementById(elemid);
    if (item) {
      if (item.className === 'comment-list comment-list_hidden') {
        item.className = 'comment-list';
      } else {
        item.className = 'comment-list comment-list_hidden';
      }
    }
  }

  return (
    <ul id={id || ''} className={listClass || 'comment-list'}>
      {comments && comments.map((comment) => {
        if (comment.kids) {
          return (
            <>
              <li className="comment">
                <Comment
                  comment={comment}
                  switchComments={switchComments}
                />
              </li>
              <CommentsTree
                id={comment.id}
                listClass="comment-list comment-list_hidden"
                commentIds={comment.kids}
              />
            </>
          );
        }
        return (
          <li className="comment">
            <Comment
              comment={comment}
            />
          </li>
        );
      })}
    </ul>
  );
};
