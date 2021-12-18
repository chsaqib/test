import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { showsListReducer } from './reducers/showsListReducer';
import { episodeDetailsReducer } from './reducers/episodeDetailsReducer';
import { episodesListReducer } from './reducers/episodesListReducer';
const rootReducer = combineReducers({
  showList: showsListReducer,
  episodesList: episodesListReducer,
  episodeDetails: episodeDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
