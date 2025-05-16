export async function getReviews() {
  const cachedReviews = localStorage.getItem("cachedReviews");
  if (cachedReviews) {
    return JSON.parse(cachedReviews);
  }

  const reviewData = await fetch("data/reviews.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(`Error fetching reviews: ${err}`);
      return null;
    });

  localStorage.setItem("cachedReviews", JSON.stringify(reviewData));

  return reviewData;
}

export async function postReview(review) {
  const reviews = await getReviews();
  if (reviews) {
    reviews.push(review);
    localStorage.setItem("cachedReviews", JSON.stringify(reviews));
  }
}
