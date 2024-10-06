import React, { useEffect, useState } from 'react'; // useEffect 추가
import axios from 'axios';
import styled from 'styled-components';

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

function Movie() {
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // API 호출
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzU2NTg2MDFlY2Y5ZDIyY2M1MjQ5NjZjOGZhMDZmZSIsIm5iZiI6MTcyNzk2MjU5Mi40MjYxMzMsInN1YiI6IjY2ZmU4ZDk3YjE0NjI4MmY3Yjg0ZGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m3YhNxI1iVr-AMFMlgKfZkPcYfU06ZI7aowPtVGBB_U`,
            },
          }
        );

        // 응답 데이터를 상태에 저장
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching the movies:', error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <Container>
        {movies.map((movie) => (
          <div key={movie.id}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ContainerImg
                src={`${base_url}${file_size}${movie.poster_path}`}
                alt={movie.title}
              />
              <Title>
                <strong>{movie.title}</strong>
              </Title>
              <Date>{movie.release_date}</Date>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Movie;
