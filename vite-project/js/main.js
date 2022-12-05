import "../styles/style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <p>hello</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
