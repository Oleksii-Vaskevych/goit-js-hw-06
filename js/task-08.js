const form = document.querySelector(".login-form");
// console.log("form", form)

form.addEventListener("submit", onSubmit);

let newObj = {};

function onSubmit(event) {
  event.preventDefault();
  const emailValue = form.email.name;
  const passwordlValue = form.password.name;

  const emaiInputValue = form.elements.email.value;
  const passwordInputValue = form.elements.password.value;

  if (emaiInputValue === "" || passwordInputValue === "") {
    return console.log("Alert! All fields must be filled");
  } else {
    newObj[emailValue] = emaiInputValue;
    newObj[passwordlValue] = passwordInputValue;
  }

  console.log(newObj);
  event.currentTarget.reset();
}

//      1  Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//      2  Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3  Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4  Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// 5  Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
