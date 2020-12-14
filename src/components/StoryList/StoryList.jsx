import React from 'react';
import { Route } from 'react-router-dom';
import { Story } from '../Story/Story';
import './StoryList.css';

export const StoryList = ({ stories }) => (
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
