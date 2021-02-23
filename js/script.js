const feedbackBtn = document.querySelector(".lost-help-btn");
const feedbackPopup = document.querySelector(".modal-feedback-container");
const feedbackClose = document.querySelector(".feedback-close-btn");
const feedbackForm = feedbackPopup.querySelector(".modal-contact-form");
const feedbackUsername = feedbackPopup.querySelector(".user-Name");
const feedbackEmail = feedbackForm.querySelector(".user-Email");
const feedbackMessage = feedbackForm.querySelector(".user-Message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-Name");
} catch (err) {
  isStorageSupport = false;
}

feedbackBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

if (storage) {
  feedbackUsername.value = storage;
  feedbackEmail.focus();
} else {
  feedbackUsername.focus();
}

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (
    !feedbackUsername.value ||
    !feedbackEmail.value ||
    !feedbackMessage.value
  ) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;

    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user-Name", feedbackUsername.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

const mapPopup = document.querySelector(".modal-map-container");
const mapLink = document.querySelector(".map-link");
const mapClose = document.querySelector(".map-close-btn");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

const cartPopup = document.querySelector(".modal-added-to-cart-container");
const buyBtn = document.querySelectorAll(".button-goods-buy");
const cartClose = document.querySelector(".added-close-btn");

buyBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      Popup.classList.remove("modal-show");
    }
  }
});

/*const backBtn = document.querySelector('.slider-btn-back');
  const forwardBtn = document.querySelector('.slider-btn-forward');
  const slider = document.querySelector('.slider');

  backBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    slider
  });
  */
