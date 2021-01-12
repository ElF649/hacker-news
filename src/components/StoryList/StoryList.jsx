import { React, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Story } from '../Story/Story';
import './StoryList.css';
import { getStories } from '../../store/storyList/actions';

// const mapStateToProps = (state) => ({
//   ids: state.storyList.storiesId.data,
//   stories: state.storyList.stories.data,
// });

// const mapDispatchToProps = {
//   storiesError, storiesPending, storiesIdPending,
// storiesIdSuccess, storiesIdError, storiesSuccess,
// };

const StoryList = () => {
  const stories = useSelector((state) => state.storyList.stories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getStories(dispatch);
  }, []);
  return (
    <section className="story-list">
      <div className="story-list__container">
        <Route exact path="/">
          <ul className="story-list__list">
            {
              stories && stories.map((story, index) => (
                <Story
                  index={index + 1}
                  key={story.id}
                  story={story}
                />
              ))
            }
          </ul>
        </Route>
      </div>
    </section>
  );
};

export default StoryList;
