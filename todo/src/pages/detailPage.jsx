import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function DetailPage() {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const [isChanged, setIsChanged] = useState(false);

  const [originalTodoDetail, setOriginalTodoDetail] = useState(null);
  const [todoDetail, setTodoDetail] = useState({
    title: '',
    content: '',
  });

  const { title, content } = todoDetail; //비구조화 할당

  const onChange = (event) => {
    const { value, name } = event.target; //event.target에서 name과 value만 가져오기
    setTodoDetail({
      ...todoDetail,
      [name]: value,
    });
  };

  const useGetDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/todo/${todoId}`);
      setTodoDetail(response.data);
      setOriginalTodoDetail(response.data);
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  const updateTodo = async () => {
    await axios.patch(`http://localhost:3000/todo/${todoId}`, todoDetail);
    setIsChanged(false);
    navigate('/');
  };

  const noUpdate = () => {
    setIsChanged(false);
    setTodoDetail(originalTodoDetail);
  };

  useEffect(() => {
    useGetDetail();
  }, []);

  return (
    <>
      {!isChanged ? (
        <div>
          <Title>나만의 todo 확인해보세요!</Title>
          <Container>
            <Word>TASK</Word>
            <Input value={title} readOnly />
            <Word>DETAIL</Word>
            <Textarea value={content} readOnly />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                onClick={() => {
                  setIsChanged(true);
                }}
              >
                수정하기
              </Button>
            </div>
          </Container>
        </div>
      ) : (
        <div>
          <Title>나만의 todo 수정하세요!</Title>
          <Container>
            <Word>TASK</Word>
            <Input value={title} name="title" onChange={onChange} />
            <Word>DETAIL</Word>
            <Textarea value={content} name="content" onChange={onChange} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                columnGap: '15px',
              }}
            >
              <Button onClick={updateTodo}>저장하기</Button>
              <NoButton onClick={noUpdate}>취소하기</NoButton>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

const NoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 45px;
  border-radius: 7px;
  border: 0;
  background-color: #a9a6a6;
  color: white;
  font-weight: 700;
  font-size: 19px;
  margin-top: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 45px;
  border-radius: 7px;
  border: 0;
  background-color: #5ac6e1;
  color: white;
  font-weight: 700;
  font-size: 19px;
  margin-top: 20px;
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

export default DetailPage;
