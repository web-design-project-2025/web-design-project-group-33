import { userId } from "../../main.js";

const user = await fetch("/data/users.json")
  .then((res) => res.json())
  .then((data) => {
    return data.find((user) => user.id === userId);
  });

document.getElementById("profile-image").src = user.image;
document.getElementById("username").textContent = user.name;
