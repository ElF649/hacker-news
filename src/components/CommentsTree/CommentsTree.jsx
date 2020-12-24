import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { commentError, commentPending, commentSuccess } from '../../store/commentsTree/actions';
import { getItemById } from '../../utils/HackerNewsAPI';
import { Comment } from '../Comment/Comment';
import './CommentsTree.css';

const mapStateToProps = (state) => ({
  comments: state.CommentsTree.comment.data,
});

const mapDispatchToProps = {
  commentError, commentPending, commentSuccess,
};

export const CommentsTree = ({
  commentIds, listClass, id, comments,
}) => {
  const getComments = async (ids) => {
    commentPending();
    try {
      const responseComments = await Promise.all(
        ids.map(getItemById),
      );
      commentSuccess(responseComments);
    } catch (error) {
      commentError(error);
    }
  };

  useEffect(async () => {
    getComments(commentIds);
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsTree);
