let click = document.querySelectorAll(".navTop li");
let navText = [...click];

let slides = document.querySelectorAll(".body_one");
let slidesIndex = [...slides];

// console.log(slidesIndex[0].dataset.pagename);

navText.forEach((e) => e.addEventListener("click", toggle));

function toggle() {
  //   console.log(this.textContent);

  navText.forEach((check) => {
    check.className.includes("textActive") &&
      check.classList.remove("textActive");
  }),
    this.classList.add("textActive");
  //   return console.log(this);
}

navText.forEach((e, eindex) =>
  e.addEventListener("click", () => {
    if (eindex > 0) {
      document.querySelector(".slider").style.transform = `translateX(${
        eindex * -100
      }vw)`;
    } else if (eindex === 0) {
      document.querySelector(".slider").style.transform = "translate(0vw)";
    }
  })
);

// -----------touch Events -----------

let touchstartX = 0;
let touchendX = 0;

function checkDirection(indexValue) {
  if (touchendX < touchstartX) console.log("left");
  if (touchendX > touchstartX) console.log("right");
}

slidesIndex.forEach((e) =>
  e.addEventListener("touchstart", (info) => {
    touchstartX = info.targetTouches[0].pageX;
    // console.log(info.targetTouches[0].pageX);
  })
);

slidesIndex.forEach((e, slideIndex) =>
  e.addEventListener("touchend", (info) => {
    touchendX = info.changedTouches[0].pageX;
    // console.log(info.changedTouches[0].pageX);
    checkDirection(slideIndex);
  })
);
