import { React, useEffect, useState } from 'react';
import { getStoryIds, getItemById } from '../../utils/HackerNewsAPI';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';

export const App = () => {
  const [stories, setStories] = useState([]);

  useEffect(async () => {
    const Ids = await getStoryIds();
    const arr = await Promise.all(
      Ids.map(getItemById),
    );
    setStories(arr);
  }, []);

  return (
    <>
      <Header />
      <Main
        stories={stories}
      />
      <Footer />
    </>
  );
};
