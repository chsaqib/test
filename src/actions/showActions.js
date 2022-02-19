import {
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAIL,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
  EPISODE_DETAILS_SUCCESS,
  EPISODE_DETAILS_FAIL,
  EPISODE_DETAILS_REQUEST,
  SHOW_LIST_REQUEST,
  EPISODES_LIST_REQUEST,
} from '../constants/showConstants';

import {
  getEpisodeDetails,
  getEpisodes,
  getShow,
} from '../services/show.service';
//fechting show from Tv Maze api
export const listShows = () => async (dispatch) => {
  try {
    dispatch({ type: SHOW_LIST_REQUEST });
    const response = await getShow();
    const data = response.data;

    dispatch({
      type: SHOW_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOW_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// fecching list of episodes

export const episodesList = () => async (dispatch) => {
  try {
    dispatch({ type: EPISODES_LIST_REQUEST });
    const response = await getEpisodes();

    const data = response.data;
    //console.log(data);

    dispatch({
      type: EPISODES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EPISODES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// fectching episode details

export const episodeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EPISODE_DETAILS_REQUEST });
    const response = await getEpisodeDetails(id);
    const data = response.data;

    dispatch({
      type: EPISODE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EPISODE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
