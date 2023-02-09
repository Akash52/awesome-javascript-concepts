import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = `
<div class="todos">
<div class="todos-header">
<h3 class="todos-title">Todo List</h3>
<div>
    <p>You have <span class="todos-count"></span></p>
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
