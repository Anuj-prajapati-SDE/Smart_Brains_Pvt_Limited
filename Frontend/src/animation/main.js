let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

function moveNext() {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
}

next.addEventListener("click", moveNext);

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

// Autoplay the slider
let slideInterval = setInterval(moveNext, 3000);

// Optional: Pause on hover
const container = document.querySelector(".container");
container.addEventListener("mouseenter", () => clearInterval(slideInterval));
container.addEventListener("mouseleave", () => slideInterval = setInterval(moveNext, 3000));



// SVG circle animation
const backTop = document.querySelector(".back-top");
const progressCircle = document.querySelector(
  ".back-top svg circle:nth-child(2)"
);
const radius = 22;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = circumference;
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  const dashOffset = circumference * (1 - scrollPercent);
  // SVG progress animation
  progressCircle.style.strokeDashoffset = dashOffset;
  // Toggle back-top visibility
  if (scrollTop > 50) {
    backTop.classList.add("back-top-show");
  } else {
    backTop.classList.remove("back-top-show");
  }
});

// Click to back to top
backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


