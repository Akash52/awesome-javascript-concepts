//Array.prototype.join();

//join method joins all elements of an array into a string.

//Basic example

let names = ['John', 'Mike', 'Jane'];
console.log(names.join(','));

//output: John,Mike,Jane

//Exampe 2
let animals = ['dog', 'cat', 'bird'];
console.log(animals.join());

//output: dog,cat,bird

//if you didn't pass any argument to join() method, it will join the array elements with a comma.

//Real world example

let name = 'john doe';

let upperCaseName = name
  .split(' ') //split the string into an array of substrings
  .map((x) => x.charAt(0).toUpperCase() + x.slice(1)) //map each substring to its first letter uppercased and concatenated with the rest of the string
  .join(' '); //join the array of substrings back into a string

console.log(upperCaseName);

//output: John Doe

//Real world example 2
