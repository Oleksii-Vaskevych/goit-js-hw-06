const inpEl = document.querySelector("#font-size-control");
// console.log("inpEl ", inpEl);

inpEl.addEventListener("input", onInputSizeControl);

const textSize = document.querySelector("#text");
// console.log("textSize", textSize);
textSize.style.fontSize = "16px";

function onInputSizeControl(event) {
  // console.log("event  ", event.currentTarget.value);
  textSize.style.fontSize = event.currentTarget.value + "px";
}
