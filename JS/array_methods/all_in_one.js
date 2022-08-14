//Array.prototype.concat();

let items = [1, 2, 3];
let newItems = items.concat(4, 5, 6);
console.log(newItems);
console.log(items);

// Array.prototype.copyWithin();

let items = [1, 2, 3, 4, 5];
let newItems = items.copyWithin(0, 3);
console.log(newItems);
console.log(items);

// Array.prototype.entries();

let items = [1, 2, 3, 4, 5];
let newItems = items.entries();
console.log(newItems);
console.log(items);

// Array.prototype.every();

let items = [1, 2, 3, 4, 5];
let newItems = items.every(function (item) {
  return item > 0;
});
console.log(newItems);
console.log(items);

// Array.prototype.fill();

let items = [1, 2, 3, 4, 5];
let newItems = items.fill(0, 3);
console.log(newItems);
console.log(items);

// Array.prototype.filter();

let items = [1, 2, 3, 4, 5];
let newItems = items.filter(function (item) {
  return item > 0;
});
console.log(newItems);
console.log(items);

// Array.prototype.find();

let items = [1, 2, 3, 4, 5];
let newItems = items.find(function (item) {
  return item > 0;
});
console.log(newItems);
console.log(items);

// Array.prototype.findIndex();

let items = [1, 2, 3, 4, 5];
let newItems = items.findIndex(function (item) {
  return item > 0;
});

console.log(newItems);
console.log(items);

// Array.prototype.forEach();

let items = [1, 2, 3, 4, 5];
let newItems = items.forEach(function (item) {
  console.log(item);
});
console.log(newItems);
console.log(items);

// Array.prototype.includes();

let items = [1, 2, 3, 4, 5];
let newItems = items.includes(3);
console.log(newItems);
console.log(items);

// Array.prototype.indexOf();

let items = [1, 2, 3, 4, 5];
let newItems = items.indexOf(3);
console.log(newItems);
console.log(items);

// Array.prototype.join();

let items = [1, 2, 3, 4, 5];
let newItems = items.join('-');
console.log(newItems);
console.log(items);

// Array.prototype.keys();

let items = [1, 2, 3, 4, 5];
let newItems = items.keys();
console.log(newItems);
console.log(items);

// Array.prototype.lastIndexOf();

let items = [1, 2, 3, 4, 5];
let newItems = items.lastIndexOf(3);
console.log(newItems);

console.log(items);

// Array.prototype.map();

let items = [1, 2, 3, 4, 5];
let newItems = items.map(function (item) {
  return item * 2;
});
console.log(newItems);
console.log(items);

// Array.prototype.pop();

let items = [1, 2, 3, 4, 5];
let newItems = items.pop();
console.log(newItems);
console.log(items);

// Array.prototype.push();

let items = [1, 2, 3, 4, 5];
let newItems = items.push(6);
console.log(newItems);
console.log(items);

// Array.prototype.reduce();

let items = [1, 2, 3, 4, 5];
let newItems = items.reduce(function (acc, item) {
  return acc + item;
});
console.log(newItems);
console.log(items);

// Array.prototype.reduceRight();

let items = [1, 2, 3, 4, 5];
let newItems = items.reduceRight(function (acc, item) {
  return acc + item;
});
console.log(newItems);
console.log(items);

// Array.prototype.reverse();

let items = [1, 2, 3, 4, 5];
let newItems = items.reverse();
console.log(newItems);
console.log(items);

// Array.prototype.shift();

let items = [1, 2, 3, 4, 5];
let newItems = items.shift();
console.log(newItems);
console.log(items);

// Array.prototype.slice();

let items = [1, 2, 3, 4, 5];
let newItems = items.slice(1, 3);
console.log(newItems);
console.log(items);

// Array.prototype.some();

let items = [1, 2, 3, 4, 5];
let newItems = items.some(function (item) {
  return item > 0;
});
console.log(newItems);
console.log(items);

// Array.prototype.sort();

let items = [1, 2, 3, 4, 5];
let newItems = items.sort();
console.log(newItems);
console.log(items);

// Array.prototype.splice();

let items = [1, 2, 3, 4, 5];
let newItems = items.splice(1, 3);
console.log(newItems);
console.log(items);

// Array.prototype.toString();

let items = [1, 2, 3, 4, 5];
let newItems = items.toString();
console.log(newItems);
console.log(items);

// Array.prototype.unshift();

let items = [1, 2, 3, 4, 5];
let newItems = items.unshift(0);
console.log(newItems);
console.log(items);

// Array.prototype.values();

let items = [1, 2, 3, 4, 5];
let newItems = items.values();
console.log(newItems);
console.log(items);
