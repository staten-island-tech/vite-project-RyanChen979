import "../styles/style.css";
// import { setupCounter } from "./counter.js";
import { restaurant } from "./items.js";

console.log(restaurant);
document.querySelector("#app").innerHTML = `
  <div>
    <h1 id="title">${restaurant.name}</h1>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
