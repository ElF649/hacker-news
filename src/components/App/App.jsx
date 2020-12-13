import { React, useEffect, useState } from 'react';
import { getStoriesID, getStoryById } from '../../utils/HackerNewsAPI';

export const App = () => {
  const [storiesIds, setStoriesIds] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(async () => {
    const Ids = await getStoriesID();
    setStoriesIds(Ids);
    storiesIds.forEach(async (id) => {
      const story = await getStoryById(id);
      setStories(stories.push(story));
      console.log(stories);
    });
  }, []);

  return (
    <>
      <p>{stories}</p>
      <p>{storiesIds}</p>
    </>
  );
};
