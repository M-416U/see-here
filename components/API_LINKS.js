const API_KEY = "2439b9895317f11787da95e8bf9e8782";
export const img_path = "https://image.tmdb.org/t/p/w500";

export const API_LINKS = {
  popular_API: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  top_rated_API: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  up_coming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  main_movies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  main_tv: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`,
  popular_tv: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
  top_rated_tv: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`,
};
