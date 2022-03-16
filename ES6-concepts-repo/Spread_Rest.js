//Spread Operator

let array1 = ['one', 'two', 'three']
let array2 = ['Four', 'Five']

array1.push(...array2) //Adds array2 items to end of array
//console.log(array1)
array1.unshift(...array2) //Adds array2 items to Beginning of array
//console.log(array1)

//second example

let arr1 = ['two', 'three']
let arr2 = ['one', ...arr1, 'four', 'five']

//console.log(arr2)

//We can also use the spred operator with destructuring

const players = ['Kyln', 'Rmby', 'Nicole', 'Naomi', 'Jim', 'Sherry']

const [first, second, third, ...unplaced] = players

console.log(first) //Kyln
console.log(second) //Rmby
console.log(third) //Nicole
console.log(unplaced) //['Nicole', 'Naomi', 'Jim', 'Sherry']
