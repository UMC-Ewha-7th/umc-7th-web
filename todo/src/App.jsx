import React from 'react';
import './App.css';
import { TodoContextProvider } from './context/TodoContext2';
import TodoPage from './TodoPage';

function App() {
  return (
    <TodoContextProvider>
      <div className="App">

        <TodoPage />
      </div>
    </TodoContextProvider>
  );
}

export default App;