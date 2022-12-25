import "../assets/css/style.css";

//Procedural Programming

const cart = [];

const addToCart = (item) => {
  cart.push(item);
};

const removeFromCart = (id) => {
  const index = cart.findIndex((x) => x.id === id);
  cart.splice(index, 1);
};

const burger = {
  id: "🍔",
  name: "Burger King",
  price: 199,
};

addToCart(burger);
console.log(cart);

setTimeout(() => {
  removeFromCart("🍔");
  console.log(cart);
}, 2500);
