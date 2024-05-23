// app.js

document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            alert('Please enter a task.');
            return;
        }

        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        todoList.appendChild(todoItem);
        todoInput.value = '';

        const editBtn = todoItem.querySelector('.edit');
        const deleteBtn = todoItem.querySelector('.delete');

        editBtn.addEventListener('click', () => editTodo(todoItem));
        deleteBtn.addEventListener('click', () => deleteTodo(todoItem));
    }

    function editTodo(todoItem) {
        const todoTextElement = todoItem.querySelector('.todo-text');
        const currentText = todoTextElement.textContent;
        const newTextInput = document.createElement('input');
        newTextInput.type = 'text';
        newTextInput.value = currentText;
        todoItem.insertBefore(newTextInput, todoTextElement);
        todoItem.removeChild(todoTextElement);

        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        saveBtn.className = 'save';
        todoItem.insertBefore(saveBtn, todoItem.querySelector('.edit'));
        todoItem.removeChild(todoItem.querySelector('.edit'));

        saveBtn.addEventListener('click', () => saveEdit(todoItem, newTextInput));
    }

    function saveEdit(todoItem, newTextInput) {
        const newText = newTextInput.value.trim();
        if (newText === '') {
            alert('Task cannot be empty.');
            return;
        }

        const todoTextElement = document.createElement('span');
        todoTextElement.className = 'todo-text';
        todoTextElement.textContent = newText;
        todoItem.insertBefore(todoTextElement, newTextInput);
        todoItem.removeChild(newTextInput);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit';
        todoItem.insertBefore(editBtn, todoItem.querySelector('.save'));
        todoItem.removeChild(todoItem.querySelector('.save'));

        editBtn.addEventListener('click', () => editTodo(todoItem));
    }

    function deleteTodo(todoItem) {
        todoList.removeChild(todoItem);
    }
});

