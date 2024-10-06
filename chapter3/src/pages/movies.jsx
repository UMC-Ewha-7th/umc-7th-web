import React from 'react';
import Category from '../components/category';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

function Movies() {
  return (
    <div>
      <h2 style={{ color: 'white' }}>카테고리</h2>
      <Container>
        <Category
          img="https://i.pinimg.com/474x/fc/8b/56/fc8b56ab63ca65ce1e09651791db79af.jpg"
          to="/movies/now-playing"
        >
          현재 상영중인
        </Category>
        <Category
          img="https://i.pinimg.com/474x/3c/c4/ef/3cc4ef1b60925c03e59b8790221b4302.jpg"
          to="/movies/popular"
        >
          인기있는
        </Category>
        <Category
          img="https://i.pinimg.com/474x/cd/67/8d/cd678d6c6e2ea5c5024cae38270e9b71.jpg"
          to="/movies/top-rated"
        >
          높은 평가를 받은
        </Category>
        <Category
          img="https://i.pinimg.com/474x/6b/cc/a4/6bcca41f40ddd6f9bddf65299ca946ca.jpg"
          to="/movies/up-coming"
        >
          개봉 예정중인
        </Category>
      </Container>
    </div>
  );
}

export default Movies;
