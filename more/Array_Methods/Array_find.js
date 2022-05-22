/*
This method receives a function as an argument and will apply it to the
array. It returns the value of an element found in the array and which 
satisfies the test function. Otherwise, it returns undefined.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Example 1
console.log(numbers.find((num) => num > 5)) // 6

// Example 2
console.log(numbers.find((num) => num > 15)) // undefined

// Example 3
console.log(numbers.find((num) => num % 2 === 0)) // 6

// Example 4
console.log(numbers.find((num) => num % 2 !== 0)) // 1

// Example 5
//Find the first prime number in the array
console.log(
  'first prime number ' +
    numbers.find((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
      }
      return true
    })
)

// Example 6
//Find the first even number in th'e array
console.log(
  ' even number ' +
    numbers.find((num) => {
      return num % 2 === 0
    })
)

// Example 7
//Find the first odd number in the array
console.log(
  'first odd number ' +
    numbers.find((num) => {
      return num % 2 !== 0
    })
)

// Example 8
//Find the first number in the array that is greater than 10
console.log(
  ' greater than 10 ' +
    numbers.find((num) => {
      return num > 10
    })
)

// Example 9
//Find the first number in the array that is less than 10
console.log(
  ' less than 10 ' +
    numbers.find((num) => {
      return num < 10
    })
)

// Example 10
//Find the first number in the array that is greater than or equal to 10
console.log(
  numbers.find((num) => {
    return num >= 10
  })
)

// Example 11
