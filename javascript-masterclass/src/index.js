import "../assets/css/style.css";

//Object Literals and Encapsulation

const cart = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  remove(id) {
    const index = this.items.findIndex((x) => x.id === id);
    this.items.splice(index, 1);
  },
};

const burger = {
  id: "🍔",
  name: "Burger King",
  price: 199,
};

cart.add(burger);
console.log(cart);

setTimeout(() => {
  cart.remove("🍔");
  console.log(cart);
}, 2500);
