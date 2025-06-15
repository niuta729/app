const cartItems = document.getElementById("cart-items");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length === 0) {
  cartItems.innerText = "Корзина пуста.";
} else {
  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerText = `${item.name} - ${item.price} руб.`;
    cartItems.appendChild(div);
  });
}
