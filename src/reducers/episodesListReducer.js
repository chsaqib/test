import {
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
} from '../constants/showConstants';

const initialState = {
  episodes: [],
  loading: true,
};
export const episodesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODES_LIST_SUCCESS:
      return { ...state, loading: false, episodes: action.payload };
    case EPISODES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
