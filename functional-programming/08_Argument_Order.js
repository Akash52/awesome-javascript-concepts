//Argument Oreder

const map = (array) => (cb) => array.map(cb);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = (x) => x * 2;

// const withArr = map(arr);

// console.log(withArr(double));
// console.log(withArr((x) => x * 3));
// console.log(withArr((x) => x * 4));

//change the order of the arguments

const map2 = (cb) => (array) => array.map(cb);

const withArr2 = map(double);

console.log(withArr2(arr));
console.log(withArr2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
