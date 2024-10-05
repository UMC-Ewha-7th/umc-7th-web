import './App.css'
import {useState} from 'react';

function App(){
  const [todos, setTodos] = useState([
    {id: 1, task: '투두 만들어보기'},
    {id: 2, task: '실습하기'}
  ]);
  const [text, setText] =useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //추가하기
  const addTodo = () =>{
    if(text.trim().length === 0) {
      alert('할일을 입력하세요');
      return;
    }
    setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) +2, task: text},
    ]);
    setText('');
  };

  //삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item)=> item.id !== id));
  };

  //수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? ({...item, task: text}) : (item)))
    );
    setEditingId('');
  };

  return(
    <div className='container'>
      <form className='type' onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => addTodo()} type='submit'>할 일 등록</button>
      </form>

      <div>
        {todos.map((todo, _) => (
          <div className='todo' style={{gap: '20px'}}>

            {editingId !== todo.id && ( 
            <div key={todo.id} style={{display: 'flex', gap: '20px'}}>
              <p>{todo.id}</p>
              <p>{todo.task}</p>
            </div>
            )}

            {editingId === todo.id &&(
            <div key={todo.id} style={{display: 'flex', gap: '20px'}}>
              <p>{todo.id}</p>
              <input defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
            </div>              
            )}


            <button onClick={() => deleteTodo(todo.id)}> 삭제하기 </button>
            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}> 수정완료 </button>) : (
                <button onClick={() => setEditingId(todo.id)}> 수정하기 </button>
              )}

          </div> 

        ))}
      </div>

    </div>
  );
}

export default App;