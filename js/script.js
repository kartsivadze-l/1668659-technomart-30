const feedbackBtn = document.querySelector(".lost-help-btn");
const feedbackPopup = document.querySelector(".modal-feedback-container");
const feedbackClose = document.querySelector(".feedback-close-btn");
const feedbackForm = feedbackPopup.querySelector(".modal-contact-form");
const feedbackUsername = feedbackPopup.querySelector(".user-name");
const feedbackEmail = feedbackForm.querySelector(".user-email");
const feedbackMessage = feedbackForm.querySelector(".user-message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-name");
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
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;

    feedbackPopup.classList.remove("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user-name", feedbackUsername.value);
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
const orderBtn = document.querySelector(".btn-order");
const continueBtn = document.querySelector(".btn-continue-shopping");

let goodsInCart = document.querySelector(".goods-in-cart");



for (var i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        cartPopup.classList.add('modal-show'); 
        
        let count = Number(goodsInCart.innerHTML);
        goodsInCart.innerHTML = count += 1;
    });
}
    

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});

orderBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  continueBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
  });

  

/*const backBtn = document.querySelector('.slider-btn-back');
  const forwardBtn = document.querySelector('.slider-btn-forward');
  const slider = document.querySelector('.slider');

  backBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    slider
  });
  */
const slider = document.querySelector(".slider");
const arrowBack = document.querySelector(".slider-btn-back");
const arrowForward = document.querySelector(".slider-btn-forward");
const sliderH = document.querySelector(".slider-h");
const sliderP = document.querySelector(".slider-p");

/*arrowBack.addEventListener("click", function (evt) {
    evt.preventDefault();
    slider.classList.remove("slider-2");
    slider.classList.add("slider-1");
  });

arrowForward.addEventListener("click", function (evt) {
    evt.preventDefault();
    slider.classList.remove("slider-1");
    slider.classList.add("slider-2");
    sliderH.textContent = "Дрели";
    sliderP.textContent = "Соседям на радость!";
  });
  */

  const deliveryBtn = document.querySelector(".service-btn-delivery");
  const guaranteeBtn = document.querySelector(".service-btn-guarantee");
  const creditBtn = document.querySelector(".service-btn-credit");
  const delivery = document.querySelector(".delivery");
  const guarantee = document.querySelector(".guarantee");
  const credit = document.querySelector(".credit");

  deliveryBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    delivery.classList.remove("hidden");
    guarantee.classList.add("hidden");
    credit.classList.add("hidden");
  });

  guaranteeBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    guarantee.classList.remove("hidden");
    delivery.classList.add("hidden");
    credit.classList.add("hidden");
  });

  creditBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    credit.classList.remove("hidden");
    delivery.classList.add("hidden");
    guarantee.classList.add("hidden");
  });

 const arrowBack = document.querySelector(".slider-btn-back");
 const arrowForward = document.querySelector(".slider-btn-forward");
 const circle1 = document.querySelector(".slider-circle-1");
 const circle2 = document.querySelector(".slider-circle-2");
 const slide1 = document.querySelector(".slide-1");
 const slide2 = document.querySelector(".slide-2");

 arrowBack.addEventListener('click', function() {
     slide1.classList.toggle("current");
     slide2.classList.toggle("current");
 }
 )
 arrowForward.addEventListener('click', function() {
    slide1.classList.toggle("current");
    slide2.classList.toggle("current");
}
)

circle1.addEventListener('click', function() {
    slide1.classList.add("current");
    slide2.classList.remove("current");
}
)
circle2.addEventListener('click', function() {
    slide2.classList.add("current");
   slide1.classList.remove("current");
   
}
)
 
