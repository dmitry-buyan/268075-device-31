const mapLink = document.querySelector(".contacts__map");
const map = document.querySelector(".map");
const mapCloseButton = map.querySelector(".map__button-close");

const mapShow = function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
};

const mapHide = function(evt) {
  if (evt.target.classList.contains("button-close") || (evt.key === "Esc" || evt.key === "Escape")) {
    if (map.classList.contains("modal-show")) {
      evt.preventDefault();
      map.classList.remove("modal-show");
    }
  }
};

mapLink.addEventListener("click", mapShow);

mapCloseButton.addEventListener("click", mapHide);

window.addEventListener("keydown", mapHide);
