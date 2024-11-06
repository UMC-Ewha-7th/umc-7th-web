import { useState } from 'react';
import './App.css';
import Input from './components/input.jsx'; 
import Button from './components/button.jsx'; 

function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: '투두 만들기' },
        { id: 2, task: '희연 혜원 혜윤 건 진민' },
    ]);
    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState('');
    const [editText, setEditText] = useState('');

    // 1. 할 일 추가
    const addTodo = () => {
        if (!text.trim()) return;
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) + 2, task: text },
        ]);
        setText('');
    };

    // 2. 할 일 삭제
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    // 3. 할 일 수정
    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId('');
    };

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                {/* Input 컴포넌트 사용 */}
                <Input value={text} onChange={(e) => setText(e.target.value)} />
                {/* Button 컴포넌트 사용 */}
                <Button onClick={addTodo}>할 일 등록</Button>
            </form>
            <div>
                {todos.map((todo) => (
                    <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
                        {editingId !== todo.id ? (
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <p>{todo.id}.</p>
                                <p>{todo.task}</p>
                                <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
                                <Button onClick={() => setEditingId(todo.id)}>수정</Button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <p>{todo.id}.</p>
                                <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
                                <Button onClick={() => updateTodo(todo.id, editText)}>수정 완료</Button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;