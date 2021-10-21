function loadEventListeners() {
    const addTodoBtn = document.querySelector('button.add-todo-btn');
    addTodoBtn.addEventListener('click', createTodoDiv);
}

function createTodoDiv() {
    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-inner-container');
    newTodoDiv.innerHTML = `
            <div class="todo-item-container">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <span class="todo-title">Montar a marmita</span>
                <button class="delete-todo"><i class="far fa-times-circle fa-2x"></i></button>
            </div>
            <div class="checklist-container">
                <ul class="checklist">
                    <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Morango <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
                    <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Banana <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
                    <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Macarrão <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
                </ul>
            </div>
    `;

    const deleteTodoBtn = newTodoDiv.querySelector('button.delete-todo')
    deleteTodoBtn.addEventListener('click', deleteTodoDiv)

    const todoContainer = document.querySelector('.todo-outer-container');
    todoContainer.append(newTodoDiv);
}

function deleteTodoDiv() {
    this.parentElement.parentElement.remove();
}

loadEventListeners();
