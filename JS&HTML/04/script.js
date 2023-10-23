document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-button">Löschen</button>
            `;
            todoList.appendChild(li);
            todoInput.value = "";
        }
    });

    todoList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            event.target.parentElement.remove();
        }
    });
});
