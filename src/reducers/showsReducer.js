import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAIL,
} from '../constants/showConstants';
export const showsListReducer = (state = { shows: [] }, action) => {
  switch (action.type) {
    case SHOW_LIST_REQUEST:
      return { loading: true, shows: [] };
    case SHOW_LIST_SUCCESS:
      return { loading: false, shows: action.payload };
    case SHOW_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
