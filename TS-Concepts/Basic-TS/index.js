"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
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
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(ID, completed, title);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(completed, "\n    "));
};
