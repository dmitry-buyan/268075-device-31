const writeUsButton = document.querySelector(".contacts__button");
const feedback = document.querySelector(".feedback");
const userNameField = feedback.querySelector("#contact-username");
const userEmail = feedback.querySelector("#contact-email");
const feedbackCloseButton = feedback.querySelector(".feedback__button-close");
const feedbackForm = feedback.querySelector(".feedback__form");

const feedbackShow = function(evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-show");
  userNameField.focus();
};

const feedbackHide = function(evt) {
  if (evt.target.classList.contains("button-close") || (evt.key === "Esc" || evt.key === "Escape")) {
    if (feedback.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedback.classList.remove("feedback-show");
    }
  }
};

const validateForm = function(evt) {
  if (!userNameField.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("username", userNameField.value);
  }

  if (!userEmail.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("email", userEmail.value);
  }
}

writeUsButton.addEventListener("click", feedbackShow);

feedbackCloseButton.addEventListener("click", feedbackHide);

feedback.addEventListener("submit", validateForm);

window.addEventListener("keydown", feedbackHide);
