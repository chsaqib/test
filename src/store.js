import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { showsListReducer } from './reducers/showsReducer';
import {
  episodeListReducer,
  episodeDetailsReducer,
} from './reducers/episodesReducer';
const reducer = combineReducers({
  showList: showsListReducer,
  episodesList: episodeListReducer,
  episodeDetais: episodeDetailsReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
