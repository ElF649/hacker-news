import { React, useEffect } from 'react';
import { Route } from 'react-router-dom';
// import {useDispatch, useSelector} from "react-redux";
import { connect } from 'react-redux';
import {
  storiesError, storiesPending, storiesIdPending, storiesIdSuccess, storiesIdError, storiesSuccess,
} from '../../store/storyList/actions';
import { getStoryIds, getItemById } from '../../utils/HackerNewsAPI';
import { Story } from '../Story/Story';
import './StoryList.css';

const mapStateToProps = (state) => ({
  ids: state.storyList.storiesId.data,
  stories: state.storyList.stories.data,
});

const mapDispatchToProps = {
  storiesError, storiesPending, storiesIdPending, storiesIdSuccess, storiesIdError, storiesSuccess,
};

const StoryList = ({ stories, ...props }) => {
// const storyList = useSelector(state => state.storyList);
// const dispatch = useDispatch();
  const getStories = async () => {
    props.storiesIdPending();
    try {
      const IdsData = await getStoryIds();
      props.storiesIdSuccess(IdsData);
      props.storiesPending();
      try {
        const storiesData = await Promise.all(
          IdsData.map(getItemById),
        );
        props.storiesSuccess(storiesData);
      } catch (error) {
        props.storiesError();
      }
    } catch (error) {
      props.storiesIdError(error);
    }
  };

  useEffect(getStories, []);
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

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
