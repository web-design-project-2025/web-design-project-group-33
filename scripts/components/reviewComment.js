export async function ReviewComment(comment) {
  const reviewComment = document.createElement("div");
  reviewComment.className = "review-comment";
  await fetch("/data/users.json")
    .then((res) => res.json())
    .then((data) => {
      const user = data.find((user) => user.id === comment.user_id);
      reviewComment.innerHTML = `  
            <div class="user-container">
                <img class="picture" src="${user.image}"/>
                <p class="name">${user.name}</p>
             </div>
            <div class="content-container">
                <p class="content">${comment.content}</p>
            </div>
        `;
    })
    .catch((err) => {
      console.log(err);
      reviewComment.innerHTML = `
        <div class="user-container">
            <p class="name">failed to load comment...</p>
        </div>
        <div class="content-container">
            <p class="content"></p>
        </div>
      `;
    });

  return reviewComment;
}
