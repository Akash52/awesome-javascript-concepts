import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
<div class="todos">
<div class="todos-header">
<h3 class="todos-title">Todo List</h3>
<div>
    <p>You have <span class="todos-count">0</span> items</p>
    <button type="button" class="todos-clear" style="display:none;">
        Clear Completed
    </button>
</div>
</div>
<form class="todos-form" name="todos">
    <input type="text" placeholder="What's next ?" name="todo">
</form>
<ul class="todos-list">
<li></li>
</ul>
</div>
`;

//State

let todos = [];

//Selectors
const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");
const count = root.querySelector(".todos-count");
const form = document.forms.todos;
const input = form.elements.todo;

//functions
function renderTodos(todos) {
  let todoString = "";
  todos.forEach((todo, index) => {
    todoString += `
    <li data-id="${index}"${todo.complete ? ' class="todos-complete"' : ""} >
        <input type="checkbox"${todo.complete ? " checked" : ""}>
        <span>${todo.label}</span>
        <button type="button"></button>
    </li>
    `;
  });
  list.innerHTML = todoString;
  count.innerText = todos.filter((todo) => !todo.complete).length;
}

function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  const complete = false;
  todos = [
    ...todos,
    {
      label,
      complete,
    },
  ];
  renderTodos(todos);
  input.value = "";
}

function updateTodo(event) {
  const id = parseInt(event.target.parentNode.getAttribute("data-id"), 10);
  const complete = event.target.checked;
  todos = todos.map((todo, index) => {
    if (index === id) {
      return {
        ...todo,
        complete,
      };
    }
    return todo;
  });
  console.log(todos);
  renderTodos(todos);
}

function deleteTodo(event) {
  if (event.target.nodeName.toLowerCase() != "button") {
    return;
  }
  const id = parseInt(event.target.parentNode.getAttribute("data-id"), 10);
  const label = event.target.previousElementSibling.innerText;
  if (window.confirm(`Delete ${label}?`)) {
    todos = todos.filter((todo, index) => index !== id);
    renderTodos(todos);
  }
}

//init
function init() {
  //Add Todo
  form.addEventListener("submit", addTodo);
  //Update Todo
  list.addEventListener("change", updateTodo);
  //Delete Todo
  list.addEventListener("click", deleteTodo);
}
init();
