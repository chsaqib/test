import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAIL,
} from '../constants/showConstants';

const initialState = {
  shows: [],
  loading: true,
};

export const showsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LIST_REQUEST:
      return { ...state, loading: true };
    case SHOW_LIST_SUCCESS:
      return { ...state, loading: false, shows: action.payload };
    case SHOW_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
