"use strict";

const firstCard = document.querySelector(
  ".reviews-flashcards > li:nth-child(1)"
);
const secondCard = document.querySelector(
  ".reviews-flashcards > li:nth-child(2)"
);
const thirdCard = document.querySelector(
  ".reviews-flashcards > li:nth-child(3)"
);
const fourthCard = document.querySelector(
  ".reviews-flashcards > li:nth-child(4)"
);

let secondCardInitialLeft = getComputedStyle(secondCard).left;
let thirdCardInitialLeft = getComputedStyle(thirdCard).left;
let fourthCardInitialLeft = getComputedStyle(fourthCard).left;

const convertPxIntoVw = (px) => {
  return `${parseInt(px) * (100 / document.documentElement.clientWidth)}vw`;
};

secondCardInitialLeft = convertPxIntoVw(secondCardInitialLeft);
thirdCardInitialLeft = convertPxIntoVw(thirdCardInitialLeft);
fourthCardInitialLeft = convertPxIntoVw(fourthCardInitialLeft);

firstCard.addEventListener("mouseover", () => {
  secondCard.style.left = "0";
  thirdCard.style.left = secondCardInitialLeft;
  fourthCard.style.left = thirdCardInitialLeft;
});

firstCard.addEventListener("mouseleave", () => {
  secondCard.style.left = secondCardInitialLeft;
  thirdCard.style.left = thirdCardInitialLeft;
  fourthCard.style.left = fourthCardInitialLeft;
});

secondCard.addEventListener("mouseover", () => {
  thirdCard.style.left = secondCardInitialLeft;
  fourthCard.style.left = thirdCardInitialLeft;
});

secondCard.addEventListener("mouseleave", () => {
  thirdCard.style.left = thirdCardInitialLeft;
  fourthCard.style.left = fourthCardInitialLeft;
});

thirdCard.addEventListener("mouseover", () => {
  fourthCard.style.left = thirdCardInitialLeft;
});

thirdCard.addEventListener("mouseleave", () => {
  fourthCard.style.left = fourthCardInitialLeft;
});
