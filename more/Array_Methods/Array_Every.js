// The every() method tests whether all elements in the array pass the test implemented
// by the provided function

// Note: For an empty array, result is true
// Note: Iteration stops immediately after a falsy return expression ( with or w/o array modification )

const fruits = ['apple', 'banana', 'orange']

const result = fruits.every((fruit) => fruit.length > 5)

//output: false
//why is this?
//because the first fruit is not longer than 5 characters

const result2 = fruits.every((fruit) => fruit.length > 3)

//output: true
//why is this?
//because all fruits are longer than 3 characters

//Scenario: Iteration happens only 3 times even if you append more items in the callback function

const fruits2 = ['apple', 'banana', 'orange']

const result3 = fruits2.every((fruit, index, arr) => {
  arr.push('pineapple' + index)
  console.log(arr)
  return typeof fruit === 'string'
})

//output: true
//why is this?
//because the callback function is called 3 times
//and the array is not modified

//Scenario 2 : Iteration stops if all elements are popped off

const fruits3 = ['apple', 'banana', 'orange']

const result4 = fruits3.every((fruit, index, arr) => {
  arr.pop()
  console.log(arr)
  return typeof fruit === 'string'
})

//output: false
//why is this?
//because the array is modified
