const inputEl = document.querySelector("#validation-input");
// console.log("input", inputEl);

inputEl.addEventListener("blur", onInputLength);

const qwerty = inputEl.getAttribute("data-length");
console.log("qwerty =", qwerty);

console.log(typeof qwerty);

function onInputLength(event) {
  // console.log("eve ", event.currentTarget.value.length);

  if (event.currentTarget.value.length === Number(qwerty)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
