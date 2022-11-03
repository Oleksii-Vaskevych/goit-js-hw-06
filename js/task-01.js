const categoriesNumder = document.querySelector("#categories");
// console.log("Categories: ", categoriesNumder);

const categoriesEl = categoriesNumder.querySelectorAll(".item");
// console.log("Number of categories: ", categoriesEl.length);

// ====Варік №2=====:)
// const categoriesEl2 = categoriesNumder.childElementCount;
// console.log("Number of categories: ", categoriesEl2);

// ====== Варік №3 ======
// const categoriesEl = categoriesNumder.children;
// console.log("Number of categories: ", categoriesEl.length);

const titleName = categoriesNumder.querySelectorAll(".item h2");

const elementCount = categoriesNumder.querySelectorAll(".item ul");
// console.log("elementCount", elementCount);

// === В результаті, в консолі будуть виведені наступні повідомлення.===

// console.log("Number of categories: ", categoriesEl.length);

// console.log("Category: ", titleName[0].textContent);
// console.log("Elements: ", elementCount[0].childElementCount);

// console.log("Category: ", titleName[1].textContent);
// console.log("Elements: ", elementCount[1].childElementCount);

// console.log("Category: ", titleName[2].textContent);
// console.log("Elements: ", elementCount[2].childElementCount);

// ====================================================================
