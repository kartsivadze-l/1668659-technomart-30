const cartPopup = document.querySelector(".modal-added-to-cart-container");
const buyBtn = document.querySelectorAll(".button-goods-buy");
const cartClose = document.querySelector(".added-close-btn");
const orderBtn = document.querySelector(".btn-order");
const continueBtn = document.querySelector(".btn-continue-shopping");

let goodsInCart = document.querySelector(".goods-in-cart");

for (var i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");

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