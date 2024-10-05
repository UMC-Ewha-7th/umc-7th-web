const addBtn = document.querySelector('#clickButton');

//텍스트 입력하면 해야할일로 들어가고 한번더 클릭하면 해낸일로 들어가게 하는 함수
function createTodo() {
    const todoList = document.querySelector('#todo-list'); // 해야 할 일 리스트
    const completedList = document.querySelector('#todolist-finish ul'); // 해낸 일 리스트
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    const newSpan = document.createElement('span');
    const todoInput = document.querySelector('#todo-Input');

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan); // 생성한 btn과 span은 li의 자식요소로 추가

    newSpan.textContent = todoInput.value;
    
    // 할 일 항목 클릭 시 해낸 일로 이동
    newLi.addEventListener('click', function() {
        // '해야 할 일' 리스트에서 제거하고 '해낸 일' 리스트로 이동
        todoList.removeChild(newLi);
        completedList.appendChild(newLi);

        newLi.addEventListener('click', function(){
            if(newSpan.style.textDecoration==='line-through'){
                newSpan.style.textDecoration='none';
                newSpan.style.color='black';
            } else {
                newSpan.style.textDecoration='line-through';
                newSpan.style.color='gray';
            }
        });
    });

    todoList.appendChild(newLi); // 해야 할 일 리스트에 항목 추가
    todoInput.value = ''; // 입력 필드 초기화
}

function keyCodeCheck() {
    const todoInput = document.querySelector('#todo-Input');
    if (window.event.keyCode === 13 && todoInput.value !== '') {
        createTodo();
    }
}

// 버튼 클릭으로 할 일 추가
addBtn.addEventListener('click', function() {
    createTodo();
});