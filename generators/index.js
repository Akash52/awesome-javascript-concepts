const abcs = ["A", "B", "C", "D"];

const iterator = abcs[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let value of iterator) {
  console.log(value);
}

//Function

const iterator2 = abcs[Symbol.iterator].bind(abcs);

const abc = iterator2();

for (let i of abc) {
  console.log(i);
}
