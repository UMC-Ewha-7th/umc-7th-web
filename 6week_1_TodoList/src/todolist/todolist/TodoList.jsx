import React, {useContext} from 'react';
import TodoContext from './TodoContext';
import './TodoList.css';

function TodoList() {
    // useContext를 통해 Context 데이터를 가져옴
    const {
        inputValue,
        setInputValue,
        todoList,
        addItem,
        deleteItem,
        editIndex,
        editValue,
        setEditValue,
        startEditing,
        saveEdit,
    } = useContext(TodoContext);

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            addItem();
        }
    };

    return (
        <div className="todo-container">
            <h1>할일 목록</h1>

            <div className="todo-add">
                <input
                    value={inputValue}
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="할 일을 입력하세요"
                />
                <button onClick={addItem}>추가</button>
            </div>
            
            <ul className="todo-list">
                {todoList.map((item, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input 
                                    value={editValue} 
                                    onChange={(e) => setEditValue(e.target.value)}/>
                                <button onClick={() => saveEdit(index)}>저장</button>
                            </>
                            ) : (
                            <>
                                <span>{item}</span> 
                                <div className="button-group">
                                    <button onClick={() => startEditing(index)}>수정</button>
                                    <button onClick={() => deleteItem(index)}>삭제</button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

/* import React, { useState } from 'react';
import './TodoList.css'; // 스타일을 위한 CSS 파일

function TodoList() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const [editIndex, setEditIndex] = useState(null); // 수정 중인 항목 인덱스
    const [editValue, setEditValue] = useState(''); // 수정 중인 할일 텍스트

    const addItem = () => {
        if (inputValue.trim() !== '') {
            setTodoList([...todoList, inputValue]);
            setInputValue(''); // 추가 후 입력란 초기화
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    };

    const deleteItem = (indexToDelete) => {
        const newTodoList = todoList.filter((_, index) => index !== indexToDelete);
        setTodoList(newTodoList);
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditValue(todoList[index]); // 수정할 텍스트 설정
    };

    const saveEdit = (index) => {
        const updatedList = [...todoList];
        updatedList[index] = editValue;
        setTodoList(updatedList);
        setEditIndex(null); // 수정 모드 종료
        setEditValue('');
    };

    return (
        <div className="todo-container">
            <h1>할일 목록</h1>
            <div className="todo-add">
                <input
                    value={inputValue}
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="할 일을 입력하세요"
                />
                <button onClick={addItem}>추가</button>
            </div>
            
            <ul className="todo-list">
    {todoList.map((item, index) => (
        <li key={index}>
            {editIndex === index ? (
                <>
                    <input 
                        value={editValue} 
                        onChange={(e) => setEditValue(e.target.value)} 
                    />
                    <button onClick={() => saveEdit(index)}>저장</button>
                </>
            ) : (
                <>
                    <span>{item}</span> // 중복된 항목을 한번만 출력
                    <div className="button-group">
                        <button onClick={() => startEditing(index)}>수정</button>
                        <button onClick={() => deleteItem(index)}>삭제</button>
                    </div>
                </>
            )}
        </li>
    ))}
</ul>

        </div>
    );
}

export default TodoList;*/
