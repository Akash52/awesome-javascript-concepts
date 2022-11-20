/*
    The destructuring assignment syntax is a JavaScript expression 
    that makes it possible to unpack values from arrays, or properties 
    from objects, into distinct variables
*/

//1.Array Destructuring

const people = ['Jhon', 'Beth', 'Mike']

//ES5

const p1 = people[0]
const p2 = people[1]
const p3 = people[2]

console.log(p1, p2, p3)

//ES6

const [person1, person2, person3] = people
//Here we Access Array element Like person1[jhon]

console.log(person1, person2, person3)

//Array Destructuring not useful Compare to Object  Destructuring

//2.Object Destructuring

const person = {
  name: 'Jhon doe',
  age: '32',
  city: 'Miami',
  gender: 'Male',
}

// Old ES5

console.log(person.name, person.age, person.city, person.gender)
//Jhon doe 32 Miami Male

//New ES6 Destructuring

const { name, age, city, gender } = person

console.log(name, age, city, gender)
//Jhon doe 32 Miami Male
