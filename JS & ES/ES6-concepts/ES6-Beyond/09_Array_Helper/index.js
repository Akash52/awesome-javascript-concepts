// forEach
// map
// filter
// reduce
// find
// indexOf
// forOf

const scores = [10, 20, 30, 40, 50];

for (const score of scores) {
  console.log(`${score >= 20 ? 'passed' : 'failed'}`);
}

//forEach
scores.forEach((score) => {
  console.log(`${score >= 20 ? 'passed' : 'failed'}`);
});

//map
const newScores = scores.map((score) => {
  return score >= 20 ? 'passed' : 'failed';
});
console.log(newScores);

//examples

const numbers = [1.23, 2.34, 3.45, 4.56, 5.67];
const integerNumbers = numbers.map((number) => {
  return Math.round(number);
});
console.log(integerNumbers);

//filter
const passedScores = scores.filter((score) => {
  return score !== 20;
});
console.log(passedScores);
