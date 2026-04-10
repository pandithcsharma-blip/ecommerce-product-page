let quantity = 1;

function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
}

function increase() {
  quantity++;
  document.getElementById("qty").innerText = quantity;
}

function decrease() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("qty").innerText = quantity;
  }
}

function addToCart() {
  alert("Added " + quantity + " item(s) to cart!");
}