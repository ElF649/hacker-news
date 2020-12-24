import { combineReducers } from 'redux';
import storyPage from './storyPage/reducers';
import storyList from './storyList/reducers';
import commentsTree from './commentsTree/reducers';

export default combineReducers({
  storyPage,
  storyList,
  commentsTree,
});
