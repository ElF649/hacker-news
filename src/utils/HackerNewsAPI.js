const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const NEW_STORIES = `${BASE_URL}/newstories.json?orderBy="$key"&limitToFirst=100`;
const ITEM = `${BASE_URL}item`;

export const getStoriesID = async () => {
  const response = await fetch(NEW_STORIES);

  const result = await response.json();

  console.log(result);

  return result;
};

export const getStoryById = async (id) => {
  const response = await fetch(`${ITEM}/${id}.json`);

  console.log(response);

  const result = await response.json();

  return result;
};
