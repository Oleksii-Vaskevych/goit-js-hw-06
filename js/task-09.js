function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
// console.log("body", body);

const btn = document.querySelector(".change-color");
// console.log("btn", btn);

const spanColor = document.querySelector(".color");
// console.log("spanColor", spanColor)

btn.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor(event) {
  // console.log("onBtnChangeColor ~ event", event);
  body.style.backgroundColor = getRandomHexColor();
  spanColor.innerHTML = getRandomHexColor();

  console.log("spa =", spanColor.innerHTML);
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
