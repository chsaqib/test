import {
  EPISODES_LIST_REQUEST,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
  EPISODE_DETAILS_SUCCESS,
  EPISODE_DETAILS_REQUEST,
  EPISODE_DETAILS_FAIL,
} from '../constants/showConstants';
export const episodeListReducer = (state = { episodes: [] }, action) => {
  switch (action.type) {
    case EPISODES_LIST_REQUEST:
      return { loading: true, episodes: [] };
    case EPISODES_LIST_SUCCESS:
      return { loading: false, episodes: action.payload };
    case EPISODES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const episodeDetailsReducer = (state = { episode: [] }, action) => {
  switch (action.type) {
    case EPISODE_DETAILS_REQUEST:
      return { loading: true, episode: [] };
    case EPISODE_DETAILS_SUCCESS:
      return { loading: false, episode: action.payload };
    case EPISODE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
