/*
    The Promise object represents the eventual completion (or failure) 
    of an asynchronous operation and its resulting value
*/

/*
A Promise is in one of these states:

    -> pending: initial state, neither fulfilled nor rejected.
    -> fulfilled: meaning that the operation was completed successfully.
    -> rejected: meaning that the operation failed.

*/

// Basic Example
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function () {
    resolve('Success!') // Yay! Everything went well!
  }, 3000)
})

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log('Yay! ' + successMessage)
})

// second example , we used reject

const willGetYouDog = new Promise((resolve, reject) => {
  const rand = Math.random()
  console.log(rand)
  if (rand < 0.5) {
    resolve()
  } else {
    reject()
  }
})

willGetYouDog.then(() => {
  console.log('WE GOT DOG !!!')
})
willGetYouDog.catch(() => {
  console.log('NO DOG')
})

//returning promises from function
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random()
      console.log(rand)
      if (rand < 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 5000)
  })
}

makeDogPromise()
  .then(() => {
    console.log('WE GOT DOG !!!')
  })
  .catch(() => {
    console.log('NO DOG')
  })

//Fetch uses Promises

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then((users) => {
    console.log(users)
  })
  .catch(() => {
    console.log('No user Found')
  })

//asynchronous execution with setTimeout()
setTimeout(function () {
  console.log('Yay!')
}, 1000)

//We can re-write this code in ES6 with Promise:
var wait1000 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000)
}).then(function () {
  console.log('Yay!')
})

//Or with ES6 arrow functions:

var wait1000 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
}).then(() => {
  console.log('Yay!')
})

console.log('Hello World !')

//It can be re-written with ES6 promises like so:

var wait1000 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })

wait1000()
  .then(function () {
    console.log('Yay!')
    return wait1000()
  })
  .then(function () {
    console.log('Wheeyee!')
  })
