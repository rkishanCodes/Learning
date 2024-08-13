const addCardBtn = document.querySelector(".add-card");
const container = document.querySelector(".container");

const cardsList = document.querySelectorAll(".card");

let count = 1;

addCardBtn.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});

container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});

const itemList = document.getElementById("itemList");



itemList.addEventListener("click", function (event) {

    console.log(event.target);
  // Check if the clicked element is an <li>
  if (event.target.tagName === "LI") {
    console.log("Item clicked:", event.target.textContent);
  }
});
