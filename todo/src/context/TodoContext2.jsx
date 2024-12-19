import React, { createContext, useState, useEffect } from 'react';
import { fetchTodos, createTodo, deleteTodoApi, updateTodoApi } from '../apis/TodoApi'

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  const addTodo = async (data) => {
    const newTodo = await createTodo(data);
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = async (id) => {
    console.log('삭제 요청 ID:', id);
    await deleteTodoApi(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    window.location.reload();
  };

  const updateTodo = async ({ id, title, content }) => {
    console.log('수정 요청 ID:', id);
    const updatedTodo = await updateTodoApi(id, { title, content });
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
