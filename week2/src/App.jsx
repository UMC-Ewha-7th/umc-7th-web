import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id:2, task: '스터디 하기' },
  ]);
  
  const [text, setText] = useState('');

  const [editingId, setEditingId] = useState('');

  const [editText, setEditText] = useState('');

  const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: newId, task: text}
    ]);
    setText('');
  }

  const deleteTodo = (id) => {
    console.log(id);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
    prev.map((item) => item.id === id ? {...item, task: text} : item));
    setEditingId('');

  };
  
  return (
    <>
      <form className = 'form' onSubmit={handleSubmit}>
        <input 
          type = 'text' 
          value = {text}
          onChange={(e) => setText(e.target.value)} />
        <button className='button' onClick={() => addTodo()} type = 'submit'>할 일 등록</button>
      </form>
      <div>{todos.map((todo, _) => 
        <div className = 'todos' style={{ display : 'flex', gap: '10px'}}>
          {editingId !== todo.id && (
            <div className = 'todo' key = {todo.id} style={{ display : 'flex', gap: '10px' }}>
              <p>{todo.id}.</p>
              <p>{todo.task}</p>
            </div>
          )}
          {editingId === todo.id && (
            <div className = 'todo' key = {todo.id}>
              <p>{todo.id}.</p>
              <input defaultValue={todo.task} onChange = {(e) => setEditText(e.target.value)} />
            </div>
          )}
          <button className='button' onClick={() => deleteTodo(todo.id)}>삭제하기</button>
          {editingId === todo.id ? (
            <button className='button' onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
          ) : (
            <button className='button' onClick={() => setEditingId(todo.id)}>수정 진행</button>
          )}
        </div>
        )}
      </div>
    </>
  );
}

export default App
