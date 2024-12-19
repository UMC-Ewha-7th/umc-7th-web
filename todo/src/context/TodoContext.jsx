import { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: '투두 만들어보기', content: '투두' },
    { id: 2, title: '실습하기', content: '투두' }
  ]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  //렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //추가하기
  const addTodo = () => {
    if (title.trim().length === 0 && content.trim().length ===0 ) {
      alert('제목을 입력하세요');
      return;
    }

    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, title: title, content: content },
    ]);
    setTitle('');
    setContent('');
  };

  //삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  //수정하기
  const updateTodo = (id, title, content) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? ({ ...item, title: title, content: content}) : (item)))
    );
    setEditingId('');
    setEditTitle('');
    setEditContent(' ');
  };

  return (
    <TodoContext.Provider value={{
      todos,
      setTodos,
      title,
      setTitle,
      content,
      setContent,
      text,
      setText,
      editingId,
      setEditingId,
      editText,
      setEditText,
      editTitle,
      setEditTitle,
      editContent,
      setEditContent,
      handleSubmit,
      addTodo,
      deleteTodo,
      updateTodo,
    }}>{children}
    </TodoContext.Provider>
  )
}

