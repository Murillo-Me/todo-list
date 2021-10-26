import './reset.scss'
import './style.scss'
import * as DOMHandler from './DOMHandler.js'

let todoList = []

class TodoItem {

    // priority goes from 0 to 2, higher to lower priority
    constructor(title, description, dueDate, priority) {
        this.id = todoList.length;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

function loadEventListeners() {
    const addTodoBtn = document.querySelector('button.add-todo-btn');
    addTodoBtn.addEventListener('click', getTodoInput);
}

function getTodoInput() {

    const todoInputElement = DOMHandler.createTodoInputElement();
    todoInputElement.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addToDo(todoInputElement);
        }
    });

    const todoAddBtn = todoInputElement.querySelector('button.add-todo-config-btn')
    todoAddBtn.addEventListener('click', () => {
        addToDo(todoInputElement)
    })

}

function addToDo(todoInputElement) {
    const title = todoInputElement.querySelector('.todo-title').value

    const todoDueDateInput = todoInputElement.querySelector('input#dueDate')
    let dueDate = null

    if (todoDueDateInput.classList.contains('active')) {
        dueDate = todoDueDateInput.value
    }

    const todoPriorityInput = todoInputElement.querySelector('.priority-input-item.active')
    const priorityValue = todoPriorityInput.getAttribute('data-priority')

    let toDo = new TodoItem(title, null, dueDate, priorityValue)
    todoList.push(toDo)

    DOMHandler.createTodoDiv(toDo);
    todoInputElement.closest('.todo-inner-container').remove();
    console.log(toDo);
}

loadEventListeners();

DOMHandler.createTodoDiv({title: 'teste'})