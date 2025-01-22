import { ChangeEvent, useEffect, useState } from "react";
import { TTodo } from "../types/todoType";
import { getTodoList } from "../apis/todo";

const TodoListPage = () => {
  const [text, setText] = useState<string>('');
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onAddTodo = () => {
    setTodoList(prev => [...prev, {
      id: prev.length+1,
      text,
      checked: false,
    }]);
    setText('');
  };

  const onDelete = (id:number) => {
    setTodoList((prev:TTodo[]) => prev.filter(todo => todo.id !== id));
  };

  const handleCheckbox = (id:number) => {
    setTodoList((prev:TTodo[]) => prev.map(todo => 
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    ));
  }

  useEffect(() => {
    const fetchTodoList = async () => {
      const result = await getTodoList();
      setTodoList(result);
    };

    fetchTodoList();
  }, []);

  return (
    <>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onAddTodo}>입력</button>
      {todoList.map(todo => (
        <div key={String(todo.id)}>
          <input
          type="checkbox"
          id={String(todo.id)}
          defaultChecked={todo.checked}
          onClick={()=>handleCheckbox(todo.id)}
          />
          <label htmlFor={String(todo.id)}>{todo.text}</label>
          <button onClick={()=>onDelete(todo.id)}>삭제</button>
        </div>
      ))}
    </>
  )
}

export default TodoListPage;