// const fruits = ['Apple', 'Mango', 'Banana']

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }

//Array push - add back element

// fruits.push('Watermelon')
// console.log(fruits)

//Array pop - remove back element
// fruits.pop('Banana')
// console.log(fruits)

//Array Shift - remove front element
// fruits.shift()
// console.log(fruits)

//Array Unshift - add front element
// fruits.unshift('Mango')
// console.log(fruits)

//Array Splice - remove & also add new element random position
// fruits.splice(2, 0, 'ABC', 'ABC')
// console.log(fruits)

//Array Slice - Copies certain part
// const spliceArray = fruits.slice(1, 2)
// console.log(spliceArray)

//Array ForEach - its return undifined value
// fruits.forEach((name) => {
//   console.log(name)
// })

//Use
//you wann to do something with each element of the array
//Don't uset
//you want to stop or break the loop when some condition is true

// let sum = 0

// const numbers = [12, 12, 12]

// numbers.forEach = (number) => {
//   sum += number
// }
// console.log(sum)

const iventory = [
  { price: 5, name: 'eggs' },
  { price: 4, name: 'milk' },
  { price: 3, name: 'brad' },
  { price: 1, name: 'brad' },
]

//Array map

// const prices = iventory.map((item) => item.price)
// const items = iventory.map((item) => item.name)

// console.log(items)

//Array filter

// const numbers = [1, 2, 3, -4, 5, 6, -6]

// numbers.filter((number) => { //NOt work bcz filter return new array
//   return number >= 0
// })
// console.log(numbers)
// const positiveNumber = numbers.filter((number) => {
//   return number >= 0
// })
// console.log(positiveNumber)

// const itemPrice = iventory.filter((item) => item.price >= 2) //Filter
// const itemName = itemPrice.map((item) => item.name) //Map
// itemName.forEach((item) => console.log(`Fruit name ${item}`)) // For Each

//Array Find

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const value = numbers.find((number) => {
//   return number > 5
// })
// console.log(value)

// const states = ['Gujarat', 'Mp', 'UP', 'KN', 'KP']
// const state = states.find((state) => state.startsWith('K'))
// console.log(state)

//Array Includes => Does this array including something ?
//=> Includes Method is case sensitive

// const array1 = [1, 2, 3, 4]
// console.log(array1.includes(1))

// const pets = ['cat', 'dog', 'lama']
// console.log(pets.includes('dog'))

// if (fruits.includes('Apple')) {
//   console.log('We have fruit')
// } else {
//   console.log('Sorry')
// }

//Array Sort

// fruits.sort()
// console.log(fruits)

//Array Some => Returns true if atleast one element passes the test

// const array = [1, 2, 4, 5]
// const greaterThan3 = (num) => num > 3
// console.log(array.some(greaterThan3))

// const array = [1, 2, 4, 5]
// console.log(array.some((el) => el > 3))

//Array Every => Return true if only every element passes the test

// console.log(array.every((el) => el > 3))

//Array Reduce
// let total = 0

// const numbers = [1, 2, 3, 4, 5, 7, 8]

// const num = numbers.reduce((acc, val) => {
//   return acc + val
// }, 0)

// console.log(num)
