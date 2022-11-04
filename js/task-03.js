const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const imgGallEl = document.querySelector(".gallery");
// console.log(imgGallEl);

// const imgGallery = (images) => {
//   return images.map(({ url, alt }) => {
//     const imgItem = document.createElement("li");
//     const imgEl = document.createElement("img");
//     imgEl.src = `${url}`;
//     imgEl.alt = `${alt}`;

//     imgItem.appendChild(imgEl);
//     return imgItem;
//   });
// };

// const elements = imgGallery(images);
// imgGallEl.append(...elements);

const imgGallery = ({ url, alt }) =>
  `<li><img src = "${url}" alt = "${alt}" width="300" height="200"/></li>`;

const imgGall = images.map(imgGallery).join("");
// console.log("imgGall", imgGall);

const imgGallEl = document.querySelector(".gallery");
imgGallEl.style.display = "flex";
imgGallEl.style.alignItems = "center";
imgGallEl.style.gap = "10px";

imgGallEl.insertAdjacentHTML("afterbegin", imgGall);

// console.log(imgGallEl);
