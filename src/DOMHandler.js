
function createTodoDiv(toDoObj) {

    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-inner-container');
    newTodoDiv.innerHTML = `
            <div class="todo-item-container">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <span class="todo-title">${toDoObj.title}</span>
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

function getCurrentDate() {
    // https://stackoverflow.com/a/29774197

    let currentDate = new Date();
    const offset = currentDate.getTimezoneOffset()
    currentDate = new Date(currentDate.getTime() - (offset*60*1000))
    return currentDate.toISOString().split('T')[0]
}

function toggleActivePriorityBtn() {
    const siblings = [...this.parentElement.children]
    siblings.forEach(element => element.classList.remove('active'));
    this.classList.toggle('active');
}

function toggleDueDateBtn() {
    if (this.classList.contains('active')) return

    const dueDateBtns = this.parentElement.querySelectorAll('button')
    const dateInput = this.parentElement.querySelector("input[type='date']")

    dueDateBtns.forEach(btn => btn.classList.remove('active'))
    this.classList.add('active')

    dateInput.classList.toggle('active')
}

function createTodoInputElement() {
    const todoInputElement = document.createElement('div');
    todoInputElement.classList.add('todo-inner-container');
    const currentDate = getCurrentDate();

    todoInputElement.innerHTML = `
            <div class="todo-item-container">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <input type="text" class="todo-title"></span>
                <button class="delete-todo"><i class="far fa-times-circle fa-2x"></i></button>
            </div>
            <div class="new-todo-config-container">
                <ul class="priority-input-list">
                    <span class="config-title">Priority: </span>
                    <li data-priority="2" class="priority-input-item active"><i class="fas fa-star"></i></li>
                    <li data-priority="1" class="priority-input-item"><i class="fas fa-star"></i></li>
                    <li data-priority="0" class="priority-input-item"><i class="fas fa-star"></i></li>
                </ul>
                <div class="dueDate-config-container">
                    <label for="dueDate" class="dueDate-label config-title">Due date:</label>
                    <button class="noDueDate-btn active"><i class="far fa-calendar-times"></i></button>
                    <input type="date" name="dueDate" id="dueDate" value="${currentDate}">
                    <button class="yesDueDate-btn"><i class="far fa-calendar"></i></button>
                </div>
                <button class="add-todo-config-btn">Add</button>
            </div>
            
    `;
    
    const dueDateBtns = todoInputElement.querySelectorAll('.dueDate-config-container button')
    dueDateBtns.forEach(btn => btn.addEventListener('click', toggleDueDateBtn))

    const priorityInputList = todoInputElement.querySelectorAll('.priority-input-item')
    priorityInputList.forEach(btn => btn.addEventListener('click', toggleActivePriorityBtn))

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