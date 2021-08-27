const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "TopRated",
    url: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=27`,
  },
  fetchromanceMovies: {
    title: "Romance",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movies",
    url: `/discover/movies/action?api_key=${API_KEY}&with_genres=10770`,
  },
};
