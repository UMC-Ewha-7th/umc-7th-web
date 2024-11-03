import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movies = () => {
  return (
    <Container>
      <h2>영화 카테고리</h2>
      <CategoryGrid>
        <CategoryItem to="/movies/now-playing">현재 상영중인 영화</CategoryItem>
        <CategoryItem to="/movies/popular">인기있는 영화</CategoryItem>
        <CategoryItem to="/movies/top-rated">높은 평가를 받은 영화</CategoryItem>
        <CategoryItem to="/movies/upcoming">개봉 예정 영화</CategoryItem>
      </CategoryGrid>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
  padding: 20px;
  text-align: center;
  width:100%;
  margin:0 auto;

`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  gap: 20px;
  padding: 20px;
  width:100%;
  justify-items:center;

`;

const CategoryItem = styled(Link)`
  padding: 20px;
  background-color: #444;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;

  &:hover {
    background-color: #666;
  }
`;