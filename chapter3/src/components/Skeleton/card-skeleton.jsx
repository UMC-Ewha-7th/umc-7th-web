import React from 'react';
import styled, { keyframes } from 'styled-components';

function CardSkeleton() {
  return (
    <Container>
      <CardMain />
      <TextWrapper>
        <TitleBox />
        <DescriptionBox />
      </TextWrapper>
    </Container>
  );
}

const skeleton = keyframes`
  0%{
    opacity: 1;
  }30%{
    opacity: 0.7;
  }50%{
    opacity: 0.4;
  }
  80%{
    opacity: 0.8;
  }100%{
    opacity:1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CardMain = styled.div`
  width: 140px;
  height: 210px;
  background-color: rgb(230, 230, 230);
  border-radius: 7px;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 5px;
`;

const DescriptionBox = styled.div`
  height: 10px;
  background-color: rgb(230, 230, 230);
  border-radius: 5px;
`;

const TitleBox = styled.div`
  background-color: rgb(230, 230, 230);
  height: 14px;
  border-radius: 5px;
`;
export default CardSkeleton;
