const inputEl = document.querySelector("#validation-input");
// console.log("input", inputEl);

inputEl.addEventListener("blur", onInputLength);

function onInputLength(event) {
  // console.log("eve ", event.currentTarget.value.length);

  if (event.currentTarget.value.length >= 6) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
