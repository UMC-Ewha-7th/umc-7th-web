import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { deleteTodo } from '../apis/todo';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ContentBox({ title, content, checked, id }) {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(checked);

  // const handleDelete = async () => {
  //   try {
  //     if (!id) {
  //       throw new Error('삭제할 ID가 제공되지 않았습니다.');
  //     }
  //     const response = await axios.delete(`http://localhost:3000/todo/${id}`);
  //     console.log('삭제 성공:', response.data);
  //   } catch (error) {
  //     console.error('에러 발생:', error);
  //   }
  // };

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todoList'],
      });
    },
  });

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const viewDetail = () => {
    navigate(`/detail/${id}`, {
      replace: false,
      state: { todoId: id },
    });
  };

  return (
    <Container>
      <Title>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox {...label} checked={isChecked} onClick={handleCheck} />
          <Task>Task. </Task>
          <TitleInput onClick={viewDetail}>{title}</TitleInput>
        </div>
        <Icon
          icon="mage:trash"
          style={{
            width: '20px',
            height: '20px',
            color: '#4F4F4F',
          }}
          onClick={() => deleteTodoMutation(id)}
        />
      </Title>
      <div style={{ marginLeft: '50px' }}>{content}</div>
    </Container>
  );
}

const TitleInput = styled.div`
  font-weight: 700;
  margin-left: 5px;
`;

const Task = styled.span`
  font-weight: 800;
  font-size: 19px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 600px;
  height: fit-content;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border: 2px solid #5ac6e1;
  padding: 15px;
  align-items: flex-start;
  row-gap: 7px;
  margin-bottom: 10px;
`;

export default ContentBox;
