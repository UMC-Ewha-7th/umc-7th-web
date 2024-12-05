import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ContentBox from '../components/contentBox';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import { getTodoList } from '../apis/todo';

function MainPage() {
  const navigate = useNavigate();
  // const [todoList, setTodoList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const {
    data: todoList,
    isPending,
    isError,
    error,
  } = useQuery({
    queryFn: getTodoList,
    queryKey: ['todoList'],
    // cacheTime: 10000,
    // staleTime: 300000,
  });

  console.log('todoList:', todoList, isPending, isError);

  // const viewContent = async () => {
  //   try {
  //     const response = await axios.get(' http://localhost:3000/todo ');
  //     console.log('todo 목록', response.data[0]);
  //     const todos = response.data[0];
  //     setTodoList(todos);
  //   } catch (error) {
  //     console.error('에러 발생:', error);
  //     setIsLoading(true);
  //     setIsError(true);
  //   }
  // };

  // useEffect(() => {
  //   viewContent();
  // }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px',
        alignItems: 'center',
      }}
    >
      <Button onClick={() => navigate('/create')}>나만의 todo 만들기</Button>
      <div>
        {isPending ? (
          <PacmanLoader color="#b9eaf6" />
        ) : isError ? (
          <div>{error.toString()}r</div>
        ) : (
          todoList[0]?.map((todo, idx) => {
            return (
              (
                <ContentBox
                  key={idx}
                  title={todo.title}
                  content={todo.content}
                  checked={todo.checked}
                  id={todo.id}
                />
              )
            );
          })
        )}
      </div>
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
  margin-bottom: 10px;
`;

export default MainPage;
