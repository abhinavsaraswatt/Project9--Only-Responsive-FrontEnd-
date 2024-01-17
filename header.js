"use strict";

const header = document.querySelector("header");

// scrollLeftMax => only valid in firefox
// (header.scrollWidth - header.clientWidth) valid in all browsers

header.scrollTo((header.scrollWidth - header.clientWidth) / 2, 0);

// SLIDER
const slider = document.querySelector("header");
let isDown = false;
let startX;
let scrollLeft;

const gestureStart = (e) => {
  if (e.target.closest("header") === slider) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }
};

const gestureEnd = () => {
  isDown = false;
  slider.classList.remove("active");
};

const gestureMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
};

if (window.PointerEvent) {
  window.addEventListener("pointerdown", gestureStart);
  window.addEventListener("pointerup", gestureEnd);
  window.addEventListener("pointermove", gestureMove);
} else {
  window.addEventListener("touchdown", gestureStart);
  window.addEventListener("touchup", gestureEnd);
  window.addEventListener("touchmove", gestureMove);

  window.addEventListener("mousedown", gestureStart);
  window.addEventListener("mouseup", gestureEnd);
  window.addEventListener("mousemove", gestureMove);
}
