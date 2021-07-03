const writeUsButton = document.querySelector(".contacts__button");
const feedback = document.querySelector(".feedback");
const userNameField = feedback.querySelector("#contact-username");
const userEmail = feedback.querySelector("#contact-email");
const userFeedback = feedback.querySelector("#contact-text");
const feedbackCloseButton = feedback.querySelector(".feedback__button-close");
const feedbackForm = feedback.querySelector(".feedback__form");

const feedbackShow = (evt) => {
  evt.preventDefault();
  feedback.classList.add("modal-show");
  userNameField.focus();
};

const addErrorClass = () => feedback.classList.add("feedback--error");

const feedbackHide = (evt) => {
  if (evt.target.classList.contains("button-close") || (evt.key === "Esc" || evt.key === "Escape")) {
    if (feedback.classList.contains("modal-show")) {
      evt.preventDefault();
      feedback.classList.remove("modal-show");
    }
  }
};

const validateForm = (evt) => {
  const data = new FormData(evt.target);

  if (data.get("username") === "") {
    evt.preventDefault();
    addErrorClass();
  } else {
    localStorage.setItem("username", data.get("username"));
  }

  if (data.get("email") === "") {
    evt.preventDefault();
    addErrorClass();
  } else {
    localStorage.setItem("email", data.get("email"));
  }

  if (data.get("text") === "") {
    evt.preventDefault();
    addErrorClass();
  }
}

writeUsButton.addEventListener("click", feedbackShow);

feedbackCloseButton.addEventListener("click", feedbackHide);

feedback.addEventListener("submit", validateForm);

window.addEventListener("keydown", feedbackHide);
