import React from 'react';
import { Route } from 'react-router-dom';
import { StoryList } from '../StoryList/StoryList';
import { StoryPage } from '../StoryPage/StoryPage';

export const Main = ({ stories }) => (
  <>
    <Route exact path="/">
      <StoryList
        stories={stories}
      />
    </Route>
    <Route path="/story">
      <StoryPage />
    </Route>
  </>
  // <NotFound />
  // <Preloader />
);
