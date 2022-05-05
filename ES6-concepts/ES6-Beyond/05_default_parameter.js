//Example : 1

// function greetings(name = 'Akash') {
//   console.log(`Hello ${name}`);
// }

// console.log(greetings('Jhone'));
// console.log(greetings());

//Example : 2

// function createSuperHero(name, healthPoints = 100) {
//   return `${name} has ${healthPoints} health points`;
// }

// const superman = createSuperHero('Superman');
// const batman = createSuperHero('Batman', 200);
// const ironman = createSuperHero('Ironman', 300);

// console.log(superman);
// console.log(batman);
// console.log(ironman);

//Example : 3

// function addList(item, list = []) {
//   list.push(item);
//   return list;
// }

// console.log(addList('item1'));
// console.log(addList('item2'));

//Example : 4

function getDate() {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return `${formattedDate} ${formattedTime}`;
}

console.log(getDate());

function logMessage(message = 'Hello', date = getDate()) {
  console.log(`${date}: ${message}`);
}
console.log(logMessage('Akash'));
console.log(logMessage('Akash', '2020-01-01'));
console.log(logMessage('Akash', '2020-01-01 12:00:00'));
