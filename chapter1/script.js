const input = document.querySelector('input');
const todoContainer = document.querySelector('.todoList');
const doneContainer = document.querySelector('.doneList');

input.addEventListener('keydown', createList);

//enter 눌렀을 때 event
function createList(event) {
  if (event.key === 'Enter') {
    const todoText = input.value.trim();
    if (todoText) {
      //입력값 비어있지 않은지 확인
      createTodo(todoText); //Todo 항목 추가
      input.value = ''; //입력 필드 초기화
    }
  }
}

//todo 항목 추가
function createTodo(text) {
  //검색어 추가
  const todoItem = document.createElement('li');
  todoItem.innerHTML = text;

  //css 추가
  todoItem.classList.add('todo-item');

  //완료 버튼 추가 및 이동
  const doneButton = document.createElement('button');
  doneButton.innerHTML = '완료';
  doneButton.addEventListener('click', function () {
    moveToDone(text, todoItem);
  });

  //리스트 항목에 버튼 추가
  todoItem.appendChild(doneButton);

  //todo 리스트에 추가
  todoContainer.appendChild(todoItem);
}

function moveToDone(text, todoItem) {
  todoContainer.removeChild(todoItem);

  const doneItem = document.createElement('li');
  doneItem.innerHTML = text;

  //css 추가
  doneItem.classList.add('done-item');

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '삭제';
  deleteButton.addEventListener('click', function () {
    doneContainer.removeChild(doneItem);
  });

  doneItem.appendChild(deleteButton);
  doneContainer.appendChild(doneItem);
}
