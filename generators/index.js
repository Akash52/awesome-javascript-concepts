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

//Create first iterator

let i = 0;

const next = () => ({
  value: i++,
  done: i > 10,
});

console.log(next());
console.log(next());

const iterator3 = {
  [Symbol.iterator]() {
    return {
      next,
    };
  },
};

for (let value of iterator3) {
  console.log(value);
}

//Custom array interator

const createReverseInterator = (arry) => ({
  [Symbol.iterator]() {
    let i = arry.length;
    return {
      next: () => ({
        value: arry[--i],
        done: i < 0,
      }),
    };
  },
});

for (let value of createReverseInterator(abcs)) {
  console.log(value);
}

//First generator

const reverseInterator = function* (arry) {
  let i = arry.length;
  while (i > 0) {
    yield arry[--i];
  }
};

for (let value of reverseInterator(abcs)) {
  console.log(value);
}

const xyz = reverseInterator(abcs);

console.log(xyz.next());
console.log(xyz.next());
console.log(xyz.next());
console.log(xyz.next());
