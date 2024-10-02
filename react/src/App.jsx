import React from 'react';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '예린이의 투두' },
  ]);

  const [text, setText] = useState('');

  const [EditingId, setEditingId] = useState('');
  const [editText, seteditText] = useState('');

  //1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  //2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //3. 수정하기(핵심)
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  //렌더링(새로고침) 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '20px' }}
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="할 일을 입력하세요!"
            />
            <button
              onClick={() => addTodo()}
              type="submit"
              style={{ border: '1px solid blue' }}
            >
              할 일 등록
            </button>
          </form>

          <div>
            {todos.map((todo, _) => (
              <div style={{ display: 'flex', gap: '20px' }}>
                {/* 수정이 아닐 때 */}
                {EditingId !== todo.id && (
                  <div
                    key={todo.id}
                    style={{ margin: '0', display: 'flex', gap: '5px' }}
                  >
                    <p>{todo.id}.</p>
                    <p>{todo.task}</p>
                  </div>
                )}

                {/* 수정 중일 때 */}
                {EditingId === todo.id && (
                  <div
                    key={todo.id}
                    style={{ margin: '0', display: 'flex', gap: '5px' }}
                  >
                    <p>{todo.id}.</p>
                    <input
                      type="text"
                      defaultValue={todo.task}
                      onChange={(e) => {
                        seteditText(e.target.value);
                      }}
                    />
                  </div>
                )}

                <button
                  style={{ padding: '0' }}
                  onClick={() => deleteTodo(todo.id)}
                >
                  삭제하기
                </button>

                {EditingId === todo.id ? (
                  <button
                    style={{ padding: '0' }}
                    onClick={() => updateTodo(EditingId, editText)}
                  >
                    수정 완료
                  </button>
                ) : (
                  <button
                    style={{ padding: '0' }}
                    onClick={() => setEditingId(todo.id)}
                  >
                    수정하기
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
