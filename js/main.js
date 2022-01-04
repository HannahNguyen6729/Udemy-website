//truncate card title

window.addEventListener("load", function () {
  truncateText();
});
function truncateText() {
  let titleArray = document.getElementsByClassName("card-title");
  //console.log(titleArray);
  for (let i = 0; i < titleArray.length; i++) {
    let text = titleArray[i].innerHTML;
    //console.log(text);
    let shortText = truncateStr(text, 40);
    titleArray[i].innerHTML = shortText;
  }
}
function truncateStr(strg, num) {
  if (strg.length > num) {
    return strg.trim().slice(0, num) + "...";
  } else {
    return strg;
  }
}

//sidebarMini
let toggleBtn = document.querySelector(".sidebarMini__button");
let sidebarMini = document.querySelector(".sidebarMini");
let bodyEle = document.querySelector("body");
let checkbox = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});

checkbox.addEventListener("click", function () {
  bodyEle.classList.toggle("darkMode");
});
