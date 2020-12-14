const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const NEW_STORIES = `${BASE_URL}/newstories.json?orderBy="$key"&limitToFirst=100`;
const ITEM = `${BASE_URL}item`;

export const getStoryIds = async () => {
  const response = await fetch(NEW_STORIES);

  const result = await response.json();

  return result;
};

export const getItemById = async (id) => {
  const response = await fetch(`${ITEM}/${id}.json`);

  const result = await response.json();

  return result;
};
