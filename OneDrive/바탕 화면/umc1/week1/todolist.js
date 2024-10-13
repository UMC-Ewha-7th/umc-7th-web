const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

function addTodo(event){
    if(event.key==='Enter'&&todoInput.value.trim()){
    todoList.appendChild(createTodoItem(todoInput.value.trim()))
    todoInput.value='';}
}
function createTodoItem(text){
    const li=document.createElement('li');
    li.textContent=text;
    li.appendChild(createButton('완료','done-btn',()=>moveToDone(li)));
    return li;
}
function createButton(text,className,onClick){
    const button=document.createElement('button');
    button.textContent=text;
    button.classList.add(className);
    button.addEventListener('click',onClick);
    return button;
}
function moveToDone(todoItem){
    todoItem.removeChild(todoItem.querySelector('button'));
    todoItem.appendChild(createButton('삭제','delete-btn',()=>doneList.removeChild(todoItem)));
    doneList.appendChild(todoItem);
}
todoInput.addEventListener('keydown',addTodo);