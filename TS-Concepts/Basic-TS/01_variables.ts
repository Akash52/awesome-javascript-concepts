//Type in TypeScript

//Type Annotations

//Code that is written in TypeScript is known as Type Annotations.

const apples: number = 5;
const speed: string = "fast";
const hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Type inference
//Type inference is a feature of TypeScript that allows the compiler to infer the type of a variable or parameter.

//Any
//Any is a type that can be of any type.

//Typescript can not figure out the type of the variable.

const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json)
console.log(coordinates)

//Here we fix it

//1) Whene a function returns the 'any' type, we must specify the type of the return value.

//1st way

const json2 = '{"x": 10, "y": 20}';
const coordinates2 = JSON.parse(json2) as { x: number; y: number };
console.log(coordinates2);

//2nd way

const json3 = '{"x": 10, "y": 20}';
const coordinates3: { x: number; y: number } = JSON.parse(json3);
console.log(coordinates3);

// 2) When we declare a variable on one line and initialize it later,

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
    break;
  }
}

// 3) Variable whose type cannot be inferred correctly.

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
    break;
  }
}