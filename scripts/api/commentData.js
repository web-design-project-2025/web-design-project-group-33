export async function getComments() {
  const cachedComments = localStorage.getItem("cachedComments");
  if (cachedComments) {
    return JSON.parse(cachedComments);
  }

  const commentData = await fetch("/data/comments.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(`Error fetching Comments: ${err}`);
      return null;
    });

  localStorage.setItem("cachedComments", JSON.stringify(commentData));

  return commentData;
}

export async function postComment(comment) {
  const comments = await getComments();
  if (comments) {
    comments.push(comment);
    localStorage.setItem("cachedComments", JSON.stringify(comments));
  }
}
