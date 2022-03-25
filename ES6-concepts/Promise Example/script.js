function startGame() {
  let counter = 0
  const btn = document.getElementById('btn').addEventListener('click', () => {
    ++counter
    console.log(counter)
  })

  // setTimeout(() => {
  //   if (counter > 5) {
  //     alert('You Won ! Your click ' + counter)
  //   } else {
  //     alert('Sorry, you lost')
  //   }
  // }, 2000)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (counter > 5) {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}

startGame()
  .then(() => alert('You Won !'))
  .catch(() => alert('You Lost !'))

/*
  States of Promises:

  First of all, a Promise is an object. There are 3 states of the Promise object:
  
  ->Pending: Initial State, before the Promise succeeds or fails.
  ->Resolved: Completed Promise
  ->Rejected: Failed Promise, throw an error
  
  For example, when we request data from the server by using a Promise, 
  it will be in pending mode until we receive our data.
  
  If we achieve to get the information from the server, 
  the Promise will be resolved successfully. But if we don’t get the information, 
  then the Promise will be in the rejected state.
  */
