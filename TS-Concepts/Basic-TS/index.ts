import axios from "axios";

//Interface ?

//Interface is used to define the shape of the data that is being returned.

// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interface Todo {
//   id: number
//   title: string
//   completed: boolean
// }

// axios.get(url).then((response) => {
//   const todo = response.data as Todo

//   const ID = todo.id
//   const title = todo.title
//   const completed = todo.completed

//   console.log(`
//     The Todo with ID: ${ID}
//     Has a title of: ${title}
//     Is it finished? ${completed}
//     `)
// })

// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interface Todo {
//   id: number
//   title: string
//   completed: boolean
// }

// axios.get(url).then((response) => {
//   const todo = response.data as Todo

//   const ID = todo.id
//   const title = todo.title
//   const completed = todo.completed

//Here we see incorrect order of parameters.

//   logTodo(ID, title, completed)
// })

// const logTodo = (id: number, title: string, completed: boolean) => {
//   console.log(`
//     The Todo with ID: ${id}
//     Has a title of: ${title}
//     Is it finished? ${completed}
//     `)
// }

