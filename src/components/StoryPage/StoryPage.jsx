import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItemById } from '../../utils/HackerNewsAPI';
import { CommentsTree } from '../CommentsTree/CommentsTree';
import { Story } from '../Story/Story';
import './StoryPage.css';
import {
  setCommentIds, storyError, storyPending, storySuccess,
} from '../../store/storyPage/actions';

const mapStateToProps = (state) => ({
  story: state.storyPage.story.data,
  commentIds: state.StoryPage.commentIds,
});

const mapDispatchToProps = {
  storyPending, storySuccess, storyError,
};

export const StoryPage = ({ story, commentIds }) => {
  const { pathname } = useLocation();
  const currentStoryId = pathname.slice(7);

  const getStory = async () => {
    storyPending();
    try {
      const resStory = await getItemById(currentStoryId);
      storySuccess(resStory);
    } catch (error) {
      storyError(Error);
    }
  };

  useEffect(() => {
    getStory();
    setCommentIds(story.kids);
  }, []);

  return (
    <section className="story-page">
      <div className="story-page__container">
        <Story
          story={story}
        />
        <CommentsTree
          commentIds={commentIds}
        />
      </div>

    </section>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
