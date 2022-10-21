const API_KEY = "3f1e00c338baa0e90e37d99fd0e5f0a6";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMoveis: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchCommedyMoveis: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMoveis: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoveis: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentariesMoveis: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
