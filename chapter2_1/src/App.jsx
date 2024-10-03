import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function chapter2_1() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '예린이의 투두' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim() === '') return; // 빈 문자열 추가 방지
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 3, task: text }, // id 중복 방지
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: editText } : item))
    );
    setEditingId(null);
    setEditText('');
  };

  // 렌더링(새로고침) 방지
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(); // 폼 제출 시 할 일 추가
  };

  return (
    <>
      <header className="header">
        <h1 style={{ textAlign: 'center' }}>예린이의 ToDo</h1>
      </header>
      <div className="List">
        <div>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '20px' }}
          >
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="할 일을 입력하세요!"
            />
            <Button onClick={() => addTodo()} type="submit" style={{}}>
              할 일 등록
            </Button>
          </form>

          <div>
            {todos.map((todo) => (
              <div
                key={todo.id}
                style={{ display: 'flex', gap: '20px', alignItems: 'center' }}
              >
                {/* 수정이 아닐 때 */}
                {editingId !== todo.id ? (
                  <>
                    <p>{todo.id}.</p>
                    <p>{todo.task}</p>
                    <Button
                      style={{ padding: '0' }}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      삭제하기
                    </Button>
                    <Button
                      style={{ padding: '0' }}
                      onClick={() => setEditingId(todo.id)}
                    >
                      수정하기
                    </Button>
                  </>
                ) : (
                  // 수정 중일 때
                  <>
                    <p>{todo.id}.</p>
                    <Input
                      type="text"
                      defaultValue={todo.task}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <Button
                      style={{ padding: '0' }}
                      onClick={() => updateTodo(todo.id)}
                    >
                      수정 완료
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default chapter2_1;