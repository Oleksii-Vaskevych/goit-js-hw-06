const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItem = document.querySelector("#ingredients");
// console.log("ingredientsItem", ingredientsItem)

const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});
// console.log("elements ~ elements", elements);

ingredientsItem.append(...elements);
console.log("ingredientsItem", ingredientsItem)