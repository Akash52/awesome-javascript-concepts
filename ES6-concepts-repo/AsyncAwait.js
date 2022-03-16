/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise

*/

/*
    Async/await
There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.
*/

//Simple Example

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000)
  })

  let result = await promise // wait until the promise resolves (*)

  alert(result) // "done!"
}

f()

// -> async ensures that the function returns a promise

// -> The keyword await makes JavaScript wait until that promise settles and returns its result

//here we call simple api

async function getUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json()
  return data
}

getUsers()
  .then((data) => console.log(data))
  .catch(() => console.log(err))
