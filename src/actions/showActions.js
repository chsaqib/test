import {
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAIL,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
  EPISODE_DETAILS_SUCCESS,
  EPISODE_DETAILS_FAIL,
} from '../constants/showConstants';
import axios from 'axios';

//fechting show from Tv Maze api
export const listShows = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.tvmaze.com/shows/6771');
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
    const response = await axios.get(
      'https://api.tvmaze.com/shows/6771/episodes'
    );
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
    const response = await axios.get(`https://api.tvmaze.com/episodes/${id}`);
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
