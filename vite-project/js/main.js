import "../styles/style.css";
import { DOM } from "./dom.js";
import { restaurant } from "./menu.js";
import { lunch } from "./menu.js";
import { dinner } from "./menu.js";
import { dessert } from "./menu.js";

console.log(restaurant);
console.log(lunch);
console.log(dinner);
console.log(dessert);

document.querySelector(
  "#storeName"
).innerHTML = `<h1 id="title">${restaurant.name}</h1>`;

lunch.forEach((el) => {
  console.log(`Name: ${el.name}; Price: ${el.price}`);
});
dinner.forEach((el) => {
  console.log(`Name: ${el.name}; Price: ${el.price}`);
});
dessert.forEach((el) => {
  console.log(`Name: ${el.name}; Price: ${el.price}`);
});

function lunchItems() {
  lunch.map((el) => {
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}

function dinnerItems() {
  dinner.map((el) => {
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}

function dessertItems() {
  dessert.map((el) => {
    DOM.menu.insertAdjacentHTML(
      "afterbegin",
      `<div class="items">
      <h4 class="name">${el.name}</h4>
      <img class="food-imgs" src="${el.img}"></img>
      <h5 class="price">${el.price}</h5>
      </div>`
    );
  });
}

function allItems() {
  lunchItems();
  dessertItems();
  dinnerItems();
}
allItems();

DOM.themeButton.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.remove("cool");
    document.body.classList.add("warm");
  } else {
    document.body.classList.remove("warm");
    document.body.classList.add("cool");
  }
});

DOM.allButton.addEventListener("click", function () {
  if (DOM.menu.classList.contains("all")) {
  } else {
    DOM.menu.innerHTML = "";
    DOM.menu.classList.remove("lunch", "dinner", "dessert");
    DOM.menu.classList.add("all");
    allItems();
  }
});

DOM.lunchButton.addEventListener("click", function () {
  if (DOM.menu.classList.contains("lunch")) {
  } else {
    DOM.menu.innerHTML = "";
    DOM.menu.classList.remove("all", "dinner", "dessert");
    DOM.menu.classList.add("lunch");
    lunchItems();
  }
});

DOM.dinnerButton.addEventListener("click", function () {
  if (DOM.menu.classList.contains("dinner")) {
  } else {
    DOM.menu.innerHTML = "";
    DOM.menu.classList.remove("all", "lunch", "dessert");
    DOM.menu.classList.add("dinner");
    dinnerItems();
  }
});

DOM.dessertButton.addEventListener("click", function () {
  if (DOM.menu.classList.contains("dessert")) {
  } else {
    DOM.menu.innerHTML = "";
    DOM.menu.classList.remove("all", "dinner", "lunch");
    DOM.menu.classList.add("dessert");
    dessertItems();
  }
});
