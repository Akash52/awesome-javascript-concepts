// This method applies a function to each element of the array.

//Example 1

const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
]

animals.forEach((animal) => {
  console.log(animal.name)
})

//Example 2

animals.forEach((animal) => {
  console.log(animal.species)
})

//Example 3

animals.forEach((animal) => {
  console.log(animal.name, animal.species)
})
