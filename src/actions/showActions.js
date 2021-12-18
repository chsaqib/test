import {
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAIL,
  EPISODES_LIST_REQUEST,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAIL,
  EPISODE_DETAILS_SUCCESS,
  EPISODE_DETAILS_REQUEST,
  EPISODE_DETAILS_FAIL,
} from '../constants/showConstants';
import axios from 'axios';

export const listShows = () => async (dispatch) => {
  try {
    dispatch({ type: SHOW_LIST_REQUEST });
    const response = await axios.get('https://api.tvmaze.com/shows/6771');
    const data = response.data;
    // console.log(data);
    // console.log(data.name);
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

export const episodesList = () => async (dispatch) => {
  try {
    dispatch({ type: EPISODES_LIST_REQUEST });
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

export const episodeDetails = (id) => async (dispatch) => {
  try {
    console.log('Episode data');
    dispatch({ type: EPISODE_DETAILS_REQUEST });
    const response = await axios.get(`https://api.tvmaze.com/episodes/${id}`);
    const data = response.data;
    console.log(data);
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
