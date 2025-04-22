const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmM4MWEwY2UxOTM5ZWFkMWVmMTcxY2JhNTcxNTc2ZSIsIm5iZiI6MTc0NDcxMTA5Mi4zMTEsInN1YiI6IjY3ZmUyZGI0NjFiMWM0YmIzMjk5NjZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PRjg9KldmM3mWYnVyaRtHVbzE9XiOqwM0bCRXLF7GQE",
  },
};

const API_KEY = "2fc81a0ce1939ead1ef171cba571576e";

const baseUrl = "https://image.tmdb.org/t/p/w500";

fetch(
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&vote_count.gte=1000?api_key=${API_KEY}`,
  options
)
  .then((res) => res.json())
  .then((data) => {
    //testing if it works
    console.log(data);
  })
  .catch((err) => console.error(err));
