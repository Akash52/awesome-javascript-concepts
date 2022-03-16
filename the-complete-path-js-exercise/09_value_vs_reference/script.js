//In JavaScript primitive types are passed around as values: meaning that each time a value is assigned, a copy of that value is created.
//On the other side objects (including plain objects, array, functions, class instances) are references.

// const animals = ['dog', 'cats']
// const otherAnimal = animals

// animals.push('Horse')

// console.log(animals)
// console.log(otherAnimal)

//Object

// const person = { firstName: 'Jhone', lastName: 'Show' }
// const otherPerson = person

// => PERSON AND OTHER PERSON POINT TO THE SAME LACATION IN THE MEMORY

// ;(person.firstName = 'jhin'), console.log(person)
// console.log(otherPerson)

// console.log(person === otherPerson) //=>TRUE

//Shallow Cloning
//Cloning Arrays = >
//1st way : Spread Operator
//2nd way : Splice Operator

// const numbers = [1, 2, 3, 4, 5] // #123abc
// const copiedNumber = numbers // #123abc
// const newNumbers = [...numbers] // #321cba
// const newNumbersSlice = numbers.slice() // #421dsa

// numbers.push(6)

// console.log(numbers)
// console.log(copiedNumber)
// console.log(newNumbers)
// console.log(newNumbersSlice)

//Cloning Objects = >
//1st way : Spread Operator
//2nd way : Object.assing()

// const person = { firstName: 'Jhone', lastName: 'Show' }
// const otherPerson = { ...person }
// const otherPersonAssign = Object.assign({}, person)
// person.firstName = 'Jhin'

// console.log(person)
// console.log(otherPerson)
// console.log(otherPersonAssign)

//=> Deep Clonning

// const person = {
//   firstName: 'Emma',
//   car: {
//     name: 'Ford',
//     color: 'Red',
//     year: '2020',
//   },
// }

// const newPerson = { ...person, car: { ...person.car } }

// ;(newPerson.firstName = 'Mia'), (newPerson.car.color = 'Blue')

// console.log(person.car)
// console.log(newPerson.car)

//JSON stringyfy & JSON Parse

// const newPerson = JSON.parse(JSON.stringify(person))

// console.log(person)
// console.log(newPerson)
