import './reset.scss'
import './style.scss'
import * as DOMHandler from './DOMHandler.js'

let todoList = []

class TodoItem {

    // priority goes from 0 to 2, higher to lower priority
    constructor(title, description, dueDate, priority = 2) {
        this.id = todoList.length;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

function loadEventListeners() {
    const addTodoBtn = document.querySelector('button.add-todo-btn');
    addTodoBtn.addEventListener('click', addTodo);
}

function addTodo() {

    const todoInputElement = DOMHandler.createTodoInputElement();

    const todoTitleInput = todoInputElement.querySelector('.todo-title')

    todoInputElement.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const title = todoTitleInput.value

            let toDo = new TodoItem(title,'description test', '10/08')

            DOMHandler.createTodoDiv(title);
            this.closest('.todo-inner-container').remove();
        }
    });

}

loadEventListeners();

DOMHandler.createTodoDiv('teste')