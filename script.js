/*=== Variables ===*/
const buttons = document.querySelectorAll(".button");
const submitBtn = document.querySelector(".button--submit");
const subContainer = document.querySelector(".submission");
const mainContainer = document.querySelector(".container");
const message = document.querySelector(".submission__message--value");

submitBtn.disabled = true;

let selectedRating = null;

/* === Button rating active & store value === */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedRating = button.textContent;
    submitBtn.disabled = false;
  });
});

/*=== Submit click event ===*/
submitBtn.addEventListener("click", () => {
  if (selectedRating) {
    message.textContent = selectedRating;
    mainContainer.hidden = true;
    subContainer.hidden = false;
  }
});
