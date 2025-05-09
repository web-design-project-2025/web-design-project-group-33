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

async function fetchMovies() {
  try {
    console.log("FETCHING!!!!");
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&vote_count.gte=1000?api_key=${API_KEY}`,
      options
    );
    const data = await res.json();

    const reviews = await fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => null);

    const movies = data.results.map((movie) => {
      let ratingSum = 0;
      let totalLikes = 0;
      let totalReviews = 0;
      reviews.forEach((review) => {
        if (review.movie_id === movie.id) {
          ratingSum += review.rating;
          totalLikes += review.likes;
          totalReviews += 1;
        }
      });
      const rating = Math.round(ratingSum / totalReviews);

      return {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        releaseDate: movie.release_date,
        poster: baseUrl + movie.poster_path,
        rating,
        totalLikes,
        totalReviews,
      };
    });

    const cacheData = {
      data: movies,
      timestamp: new Date().getTime(),
    };

    localStorage.setItem("cachedMovies", JSON.stringify(cacheData));
    return movies;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getMovies() {
  const cachedMovies = localStorage.getItem("cachedMovies");

  if (!cachedMovies) return await fetchMovies();

  const movies = JSON.parse(cachedMovies);
  const maxAge = 24; //hours
  const age = (new Date().getTime() - movies.timestamp) / (1000 * 60 * 60); //from milliseconds to hours
  if (age < maxAge) {
    return movies.data;
  } else {
    return await fetchMovies();
  }
}
