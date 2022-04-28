const menu = [
  {
    name: 'Hamburger',
    price: 10,
    description:
      'A hamburger with a rim of lettuce sitting on a black plate next to a slice of swiss cheese',
    category: 'Breakfast',
  },
  {
    name: 'Cheeseburger',
    price: 10,
    description:
      'A hamburger with a rim of lettuce sitting on a black plate next to a slice of swiss cheese',
    category: 'Breakfast',
  },
  {
    name: 'Hotdog',
    price: 10,
    description:
      'A hamburger with a rim of lettuce sitting on a black plate next to a slice of swiss cheese',
    category: 'Breakfast',
  },
  {
    name: 'French Fries',
    price: 10,
    description:
      'A French Fries with a rim of lettuce sitting on a black plate next to a slice of swiss cheese',
    category: 'Breakfast',
  },
  {
    name: 'Coffee',
    price: 10,
    description: 'Coffee',
    category: 'Drinks',
  },
  {
    name: 'Tea',
    price: 10,
    description: 'Tea',
    category: 'Drinks',
  },
];

// const uniqueCategory = new Set(menu.map((item) => item.category));
// console.log(uniqueCategory);

//console in Array
const uniqueCategory = [...new Set(menu.map((item) => item.category))];
console.log(uniqueCategory);
