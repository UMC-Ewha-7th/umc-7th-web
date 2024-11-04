import React, {createContext, useState} from 'react';

const TodoContext = createContext(); // 컨텍스트 생성

export const TodoProvider = ({children}) => { // 관련 함수를 context를 통해 접근할 수 있도록 설정
    const [inputValue, setInputValue] = useState(''); // 입력한 할 일 저장
    const [todoList, setTodoList] = useState([]); // 할 일 목록 전체를 저장
    const [editIndex, setEditIndex] = useState(''); // 수정할 일의 인덱스 저장
    const [editValue, setEditValue] = useState(''); // 수정한 할 일의 내용 저장

    // 새롭게 할 일을 추가하는 함수
    const addItem = () => {
        if(inputValue.trim() !== '') {
            setTodoList([...todoList, inputValue]);
            setInputValue('');
        }
    };

    // 할 일을 삭제하는 함수
    const deleteItem = (indexToDelete) => {
        const newTodoList = todoList.filter ((_, index) => index !== indexToDelete);
        setTodoList(newTodoList);
    };

    // 할 일을 수정하는 함수
    const startEditing = (index) => {
        setEditIndex(index);
        setEditValue(todoList[index]);
    };

    // 수정한 할 일을 저장하는 함수
    const saveEdit = (index) => {
        const updatedList = [...todoList]; //todoList 배열을 복사한 후
        updatedList[index] = editValue; // editValue를 해당 인덱스에 삽입하여 업데이트 한다
        setTodoList(updatedList); // 새로운 목록으로 저장하고
        setEditIndex(null); // 수정 모드를 종료한다
        setEditValue(''); // 입력창을 초기화한다
    }


    return (
        <TodoContext.Provider  
            value={{
                inputValue,
                setInputValue,
                todoList,
                addItem,
                deleteItem,

                editIndex,
                editValue,
                setEditValue,
                setEditIndex,
                
                startEditing,
                saveEdit,
            }}>
                {children}
            </TodoContext.Provider>
    );
};


export default TodoContext;