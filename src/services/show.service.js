import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const getShow = () => {
  return axios.get(`${REACT_APP_API_URL}shows/6771`);
};
const getEpisodes = () => {
  return axios.get(`${REACT_APP_API_URL}shows/6771/episodes`);
};
const getEpisodeDetails = (id) => {
  return axios.get(`${REACT_APP_API_URL}episodes/${id}`);
};
export { getShow, getEpisodes, getEpisodeDetails };
