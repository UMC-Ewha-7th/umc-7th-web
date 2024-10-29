import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch.js';
import { useNavigate } from 'react-router-dom';

const apiKey = import.meta.env.VITE_API_KEY;
const movieKey = import.meta.env.VITE_MOVIE_API_URL;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10px;
`;

const ContainerImg = styled.img`
  width: 100%; /* 이미지가 그리드 셀에 꽉 차도록 */
  height: auto; /* 이미지 비율 유지 */
  &:hover {
    filter: brightness(0.5);
  }
`;

const Title = styled.p`
  font-size: 12px;
  color: white;
  margin: 1px;
`;

const Date = styled.p`
  font-size: 7px;
  color: white;
  margin: 2px;
`;

function Popular() {
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';
  const navigate = useNavigate();

  // const [movies, setMovies] = useState([]);
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/popular?language=ko-KR&page=1`);

  if (isLoading) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>로딩 중입니다...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>에러 중</h1>
      </div>
    );
  }

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       // API 호출
  //       const response = await axios.get(
  //         '${movieKey}/movie/popular?language=ko-KR&page=1',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${apiKey}`,
  //           },
  //         }
  //       );

  //       // 응답 데이터를 상태에 저장
  //       setMovies(response.data.results);
  //     } catch (error) {
  //       console.error('Error fetching the movies:', error);
  //     }
  //   };

  //   getMovies();
  // }, []);

  return (
    <>
      <Container>
        {movies.data?.results.map((movie) => (
          <div key={movie.id}>
            <ContainerImg
              src={`${base_url}${file_size}${movie.poster_path}`}
              alt={movie.title}
              onClick={() =>
                navigate(`/movie/${movie.id}`, {
                  replace: false,
                  state: { moiveId: movie.id },
                })
              }
            />
            <Title>
              <strong>{movie.title}</strong>
            </Title>
            <Date>{movie.release_date}</Date>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Popular;
