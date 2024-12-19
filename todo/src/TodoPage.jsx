import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from './context/TodoContext2';

const TodoPage = () => {
    const {
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
    } = useContext(TodoContext);

    console.log(todos[0]);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const handleAdd = () => {
        if (title.trim() && content.trim()) {
            addTodo({ title, content });
            setTitle('');
            setContent('');
            window.location.reload();
        } else {
            alert('제목과 내용을 입력하세요.');
        }
    };

    const handleEdit = (id) => {
        updateTodo({ id, title: editTitle, content: editContent });
        setEditingId(null);
        setEditTitle('');
        setEditContent('');
    };

    return (
        <Container>
            <h1>TO-DO LIST</h1>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                />
                <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력하세요"
                />
                <SubmitButton onClick={handleAdd}>추가하기</SubmitButton>
            </Form>

            <List>
                {todos[0]?.map((todo) => (
                    <TodoItem key={todo.id}>
                        {editingId === todo.id ? (
                            <>
                                <Input
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <Input
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                />
                                <Button onClick={() => handleEdit(todo.id)}>완료</Button>
                                <Button onClick={() => setEditingId(null)}>취소</Button>
                            </>
                        ) : (
                            <>
                                <p>
                                    <strong>{todo.title}</strong>: {todo.content}
                                </p>
                                <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
                                <Button onClick={() => {
                                    setEditingId(todo.id);
                                    setEditTitle(todo.title);
                                    setEditContent(todo.content);
                                }}>수정</Button>
                            </>
                        )}
                    </TodoItem>
                ))}
            </List>
        </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  h1{
    text-align: center;
    }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 60%;
  margin: 5px;
  height: 30px;
  border: solid rgb(86, 143, 223) 2px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 60%;
  height:30px;
  margin: 5px;
  background-color:rgba(86, 143, 223, 0.214) ;
  border: solid rgb(86, 143, 223) 1px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  size: 120%;
`

const Button = styled.button`
  background-color:rgba(86, 143, 223, 0.214) ;
  border: solid rgb(86, 143, 223) 1px;
  border-radius:5px;
  color: white;
  cursor: pointer;
  size: 120%;
  height: 25px;
  margin: 5px;
`;

const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoItem = styled.div`
  width: 60%;
  margin: 10px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default TodoPage;