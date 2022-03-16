//The "new" keyword

//It create a new object

// const person = {}
// const person1 = new Object()

// person.firstname = 'jhon'
// person1.firstname = 'jhane'

// console.log(typeof person)
// console.log(typeof person1)

// const myDate = new Date()
// console.log(myDate.getFullYear())

//the "this" keyword

// const person = {
//   name: 'Jhon',
//   getName() {
//     console.log(this)
//   },
// }

// person.getName()

// function Car(color, brand, wheels) {
//   this.color = color
//   this.brand = brand
//   this.wheels = wheels

//   console.log(this)
// }

// const blueCar = new Car('blue', 'BMW', 4)
// const redCar = new Car('red', 'BMW', 4)

//Classes => A class is a schema for an object that can save many values

// const person = {
//     name : 'sky',
//     age : 21,
//     isWorking : true
// }

class Person {
  constructor(name, age, isWorking) {
    ;(this.name = name), (this.age = age), (this.isWorking = isWorking)
  }
}

const user = new Person('Akash', '24', true)
console.log(user)
