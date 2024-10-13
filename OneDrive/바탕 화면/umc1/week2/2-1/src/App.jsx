import { useState } from 'react';
import './App.css';  // 스타일 파일 불러오기
import Button from './components/button.jsx';
import Input from './components/input.jsx';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: '투두 만들기' },
        { id: 2, task: '희연 혜원 혜윤 건 진민' },
    ]);
    const [text, setText] = useState('');  // 새로 추가할 할 일의 텍스트
    const [editingId, setEditingId] = useState('');  // 수정 중인 할 일 ID
    const [editText, setEditText] = useState('');  // 수정할 할 일의 텍스트

    const handleSubmit = (e) => {
        e.preventDefault();  // 폼 기본 동작 방지
    };

    const addTodo = () => {
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) + 2, task: text },
        ]);
        setText('');  // 입력 필드 초기화
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId('');  // 수정 완료 후 수정 상태 종료
    };

    return (
        <div className="todo-container">  {/* 전체 ToDo List 컨테이너 */}
            <form onSubmit={handleSubmit} className="todo-form">  {/* 입력 폼 */}
                <Input value={text} onChange={(e) => setText(e.target.value)} />
                <Button onClick={addTodo} text="할 일 등록" />
            </form>

            <div className="todo-list">  {/* 할 일 목록 */}
                {todos.map((todo) => (
                    <div key={todo.id} className="todo-item">  {/* 각 할 일 항목 */}
                        {editingId !== todo.id ? (
                            <>
                                <p>{todo.id}.</p>
                                <p>{todo.task}</p>
                            </>
                        ) : (
                            <>
                                <p>{todo.id}.</p>
                                <Input
                                    defaultValue={todo.task}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                            </>
                        )}
                        <Button onClick={() => deleteTodo(todo.id)} text="삭제하기" />
                        {editingId === todo.id ? (
                            <Button
                                onClick={() => updateTodo(todo.id, editText)}
                                text="수정 완료"
                            />
                        ) : (
                            <Button
                                onClick={() => setEditingId(todo.id)}
                                text="수정 진행"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;