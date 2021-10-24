
function createTodoDiv(title = 'Empty') {
    console.log(title);
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-inner-container');
    newTodoDiv.innerHTML = `
            <div class="todo-item-container">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <span class="todo-title">${title}</span>
                <button class="delete-todo"><i class="far fa-times-circle fa-2x"></i></button>
            </div>
    `;

    const deleteTodoBtn = newTodoDiv.querySelector('button.delete-todo')
    deleteTodoBtn.addEventListener('click', deleteTodoDiv)

    const todoContainer = document.querySelector('.todo-outer-container');
    todoContainer.append(newTodoDiv);
}

function deleteTodoDiv() {
    if (this.closest('.todo-inner-container') === null) {
        console.error("ERROR: Couldn't find todo element to delete. No todo-inner-container found.");
        return
    }
    this.closest('.todo-inner-container').remove();
}

function createTodoInputElement() {
    const todoInputElement = document.createElement('div');
    todoInputElement.classList.add('todo-inner-container');
    todoInputElement.innerHTML = `
            <div class="todo-item-container">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <input type="text" class="todo-title"></span>
                <button class="delete-todo"><i class="far fa-times-circle fa-2x"></i></button>
            </div>
            <div class="new-todo-config-container">
                <ul class="priority-input-list">
                    <li class="priority-input-item">2</li>
                    <li class="priority-input-item">1</li>
                    <li class="priority-input-item">0</li>
                </ul>
                <div class="dueDate-config-container">
                    <label for="dueDate" class="dueDate-label">Due:</label>
                    <input type="date" name="dueDate" id="dueDate">
                </div>
            </div>
            
    `;

    const datePicker = todoInputElement.querySelector('#dueDate')
    datePicker.value = Date.now();

    const deleteTodoBtn = todoInputElement.querySelector('button.delete-todo')
    deleteTodoBtn.addEventListener('click', deleteTodoDiv)

    const todoContainer = document.querySelector('.todo-outer-container');
    todoContainer.append(todoInputElement);

    const todoTitleInput = todoInputElement.querySelector('.todo-title')
    todoTitleInput.focus();

    return todoInputElement;
}

export {createTodoDiv, createTodoInputElement, deleteTodoDiv}

{/* <div class="checklist-container">
    <ul class="checklist">
        <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Morango <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
        <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Banana <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
        <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Macarrão <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
    </ul>
</div> */}