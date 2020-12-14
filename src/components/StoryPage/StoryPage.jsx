import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getItemById } from '../../utils/HackerNewsAPI';
import { CommentsTree } from '../CommentsTree/CommentsTree';
import { Story } from '../Story/Story';
import './StoryPage.css';

export const StoryPage = () => {
  const [story, setStory] = useState({});
  const [commentIds, setCommentIds] = useState([]);

  const { pathname } = useLocation();
  const currentStoryId = pathname.slice(7);

  useEffect(async () => {
    const responseStory = await getItemById(currentStoryId);
    setStory(responseStory);
    setCommentIds(responseStory.kids);
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
