//Object is unordered collection of related data in form of key and value pair
const person = {
  firstName: 'Tom',
  latName: 'Cruise',
  age: 40,
  car: {
    brant: 'Toyat',
    year: '2015',
    color: 'RED',
  },
}
// console.log(person)

//Object Methods

// const dog = {
//   name: 'fluffy',
//   age: '2',
//   listAllProperties: function () {
//     console.log(this.name, this.age)
//   },
// }
// dog.listAllProperties()

//Initialize an object

const employees = {
  boss: 'Meichel',
  secratery: 'Pam',
  sales: 'Jim',
  accountant: 'Oscar',
}

//Object.key()=> create an array containing the value of an object

// const positions = Object.keys(employees)
// console.log(positions)

//Object.values() => create an array containing the value of an object.

// const employeesInfo = Object.values(employees)
// console.log(employeesInfo)

// const user = {
//   username: 'Jhon',
//   password: '1233',
// }

// const admin = Object.freeze(user)
// ;(admin.username = 'test'), (admin.password = '123123')
// console.log(admin)
