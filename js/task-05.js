const inputText = document.querySelector("#name-input");
// console.log("inputText", inputText);

const nameOutput = document.querySelector("#name-output");

inputText.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  nameOutput.textContent = event.currentTarget.value;
}
