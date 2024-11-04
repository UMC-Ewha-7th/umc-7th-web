import React from 'react';
import TodoList from './todolist/todolist/TodoList'; 
import { TodoProvider } from './todolist/todolist/TodoContext';

function App() {
    return (
        <TodoProvider>
            <TodoList /> {/* TodoList 컴포넌트를 렌더링합니다. */}
        </TodoProvider>
    );
}

export default App;