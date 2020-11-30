"use strict";

//selecting all question elements
const questions = document.querySelectorAll(".question");

//looping through questions in order to access the buttons
questions.forEach(question => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    //checking if any item is already selected, if so their class is being removed ensuring that on press of new question, the older one closes
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove("display-answer");
      }
    });
    question.classList.toggle("display-answer");
  });
});

//date
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();