import { TMDB_API_KEY, TMDB_BASE_URL } from "constants/tmdb";

export const API_KEY_PARAM = `api_key=${TMDB_API_KEY}`;
export const NETFLIX_NETWORK = 213;
export const GENRES = {
  ACTION: 28,
  ANIME: 16,
  COMEDY: 35,
  HORROR: 27,
  DOCUMENTARIES: 99,
};

const requests = {
  fetchNetFlixOriginal: `${TMDB_BASE_URL}discover/tv?${API_KEY_PARAM}&with_networks=${NETFLIX_NETWORK}&language=en-US`,
  fetchTrending: `${TMDB_BASE_URL}trending/all/week?${API_KEY_PARAM}&language=en-US`,
  fetchTopRated: `${TMDB_BASE_URL}movie/top_rated?${API_KEY_PARAM}&language=en-US`,
  fetchAction: `${TMDB_BASE_URL}discover/movie?${API_KEY_PARAM}&with_genres=${GENRES.ACTION}&language=en-US`,
  fetchAnime: `${TMDB_BASE_URL}discover/movie?${API_KEY_PARAM}&with_genres=${GENRES.ANIME}&language=en-US`,
  fetchComedy: `${TMDB_BASE_URL}discover/movie?${API_KEY_PARAM}&with_genres=${GENRES.COMEDY}&language=en-US`,
  fetchHorror: `${TMDB_BASE_URL}discover/movie?${API_KEY_PARAM}&with_genres=${GENRES.HORROR}&language=en-US`,
  fetchDocumentaries: `${TMDB_BASE_URL}discover/movie?${API_KEY_PARAM}&with_genres=${GENRES.DOCUMENTARIES}&language=en-US`,
};

export default requests;
