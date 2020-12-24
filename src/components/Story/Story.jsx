import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import star from '../../images/star.svg';
import './Story.css';

function descendantsToString(descendants) {
  if (descendants === 1) {
    return '1 комментарий';
  } if (descendants > 1 && descendants < 5) {
    return `${descendants} комментария`;
  } if (descendants > 4) {
    return `${descendants} комментариев`;
  } return '';
}

function dateToString(date) {
  return new Date(date * 1000).toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
}

function urlToDomen(url) {
  if (url) {
    const { hostname } = new URL(url);
    return hostname;
  }
  return undefined;
}

export const Story = ({ story, index }) => {
  const {
    by, descendants, id, score, time, title, url,
  } = story;
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  return (
    <div className="story">
      <div className="story__container">
        {index && <span className="story__index">{`${index}.`}</span>}
        <div className="story__content">
          <div className="story__title">
            <a
              href={url}
              className="story__link"
            >
              {title}
            </a>
            {urlToDomen(url) && (
              <a
                href={url}
                className="story__host"
              >
                {`(${urlToDomen(url)})`}
              </a>
            )}
          </div>
          <div className="story__caption">
            <span className="story__score">
              {score}
              <img className="story__score-img" src={star} alt="star" />
            </span>
            |
            <p className="story__author">{by}</p>
            |
            <p className="story__date">{dateToString(time)}</p>
            |
            {!isMobile && (
              <Link
                className="story__comments"
                to={`/story/${id}`}
              >
                {descendantsToString(descendants)}
              </Link>
            )}
          </div>
          {isMobile
            && (
              <Link
                className="story__comments"
                to={`/story/${id}`}
              >
                {descendantsToString(descendants)}
              </Link>
            )}
        </div>
      </div>
    </div>
  );
};
