//Array map is used to create a new array with the results of calling a provided function on every element in the calling array.

//Example 1

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
const carUpperCase = cars.map((car) => {
  return car.toUpperCase()
})
console.log(carUpperCase) // [ 'FORD', 'CHEVY', 'HONDA', 'TOYOTA' ]

//Example 2

const products = [
  { name: 'Banana', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
  { name: 'Apple', type: 'Fruit' },
  { name: 'Orange', type: 'Fruit' },
  { name: 'Pear', type: 'Fruit' },
  { name: 'Broccoli', type: 'Vegetable' },
  { name: 'Cucumber', type: 'Vegetable' },
  { name: 'Mango', type: 'Fruit' },
]
const fruits = products.map((product) => {
  return product.name
})
console.log(fruits) // [ 'Banana', 'Apple', 'Orange', 'Pear', 'Mango' ]

//return only fruits

const onlyFruits = products.map((product) => {
  if (product.type === 'Fruit') {
    return product.name
  }
})

console.log(onlyFruits) // [ 'Banana', 'Apple', 'Orange', 'Pear', 'Mango' ]

//return only vegetables

const onlyVegetables = products.map((product) => {
  if (product.type === 'Vegetable') {
    return product.name
  }
})
console.log(onlyVegetables) // [ 'Carrot', 'Broccoli', 'Cucumber' ]
