const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 300, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

//filter products that are cheaper than 400
const cheapProducts = products.filter((product) => {
  return product.price < 400;
});
console.log(cheapProducts);

//filter products that are more than 400
const expensiveProducts = products.filter((product) => {
  return product.price > 400;
});
console.log(expensiveProducts);

//filter products quantity is less than 3
const lessProducts = products.filter((product) => {
  return product.quantity < 3;
});
console.log(lessProducts);

const tasks = [
  { title: 'Сходить в магазин', completed: true },
  { title: 'Купить продукты', completed: true },
  { title: 'Посмотреть фильм', completed: false },
  { title: 'Записаться на курс', completed: false },
];

//filter tasks that are completed
const completedTasks = tasks.filter((task) => {
  return task.completed;
});

console.log('completedTasks', completedTasks);

//filter tasks that are not completed
const uncompletedTasks = tasks.filter((task) => {
  return !task.completed;
});

console.log('uncompletedTasks', uncompletedTasks);

//filter all tasks that are completed or not completed

const allTasks = tasks.filter((task) => {
  return task.completed || !task.completed;
});

console.log('allTasks', allTasks);
