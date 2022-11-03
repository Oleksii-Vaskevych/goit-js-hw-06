let counterValue = 0;

const addBtn = document.querySelector('[data-action="increment"]');
// console.log("addBtn", addBtn)

const removeBtn = document.querySelector('[data-action="decrement"]');
// console.log("removeBtn", removeBtn)

const value = document.querySelector("#value");
// console.log("value", value.textContent)

addBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
removeBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
