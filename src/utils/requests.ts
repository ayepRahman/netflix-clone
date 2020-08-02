export const TMDB_BASE_URL = process.env.REACT_APP_TMDB_URL;
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const API_KEY_PARAM = `api_key=${TMDB_API_KEY}`;
export const NETFLIX_NETWORK = 213;

const requests = {
  fetchTrending: `${TMDB_BASE_URL}trending/all/week?${API_KEY_PARAM}&language=en-US`,
  fetchNetFlixOriginal: `${TMDB_BASE_URL}discover/tv?${API_KEY_PARAM}&with_networks=${NETFLIX_NETWORK}&language=en-US`,
};

export default requests;
