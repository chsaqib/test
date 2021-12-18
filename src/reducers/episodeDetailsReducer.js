import {
  EPISODE_DETAILS_SUCCESS,
  //EPISODE_DETAILS_REQUEST,
  EPISODE_DETAILS_FAIL,
} from '../constants/showConstants';

const initialState = {
  episode: [],
  loading: true,
};

export const episodeDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case EPISODE_DETAILS_REQUEST:
    //   return { loading: true, episode: [] };
    case EPISODE_DETAILS_SUCCESS:
      return { ...state, loading: false, episode: action.payload };
    case EPISODE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
