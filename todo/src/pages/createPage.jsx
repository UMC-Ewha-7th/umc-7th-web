import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postTodo } from '../apis/todo';
import { queryClient } from '../main';

function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // const getContent = async () => {
  //   const requestData = {
  //     title,
  //     content,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:3000/todo`,
  //       requestData
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('에러 발생:', error);
  //   }
  // };

  const { mutate:postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey:['todoList']
      })
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log('항상 실행');
    },
  });

  const handleSubmit = () => {
    postTodoMutation({ title, content });
    navigate(`/`);
  };

  const taskChange = (event) => {
    setTitle(event.target.value);
  };

  const contentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <Title>할 일을 작성해주세요!</Title>
      <Container>
        <Word>TASK</Word>
        <Input value={title} onChange={taskChange} />
        <Word>DETAIL</Word>
        <Textarea value={content} onChange={contentChange} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleSubmit}>저장하기</Button>
        </div>
      </Container>
    </div>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 45px;
  border-radius: 7px;
  border: 0;
  background-color: #5ac6e1;
  color: white;
  font-weight: 700;
  font-size: 19px;
  margin-top: 20px;
  overflow: auto;
`;

const Textarea = styled.textarea`
  font-size: 20px;
  border: 2px solid black;
  height: 200px;
  padding: 15px;
  overflow: auto;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 2px solid black;
  font-size: 20px;
  margin-bottom: 35px;
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  row-gap: 20px;
`;

const Word = styled.div`
  font-weight: 600;
  font-size: 22px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
`;

export default CreatePage;
