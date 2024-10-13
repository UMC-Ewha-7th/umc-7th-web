import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard.jsx'; // 경로 수정 필요할 수 있음
import styled from 'styled-components';

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUzMzRmN2FlZGRiYmYzZjFlNTdlNGFkNGFmZmE5YiIsIm5iZiI6MTcyODQ1MjE4MC42NzUwODMsInN1YiI6IjY3MDVkMzI5MDAwMDAwMDAwMDU4NmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSt-mp-dfYvVhWAZ8wj7GEm8_nkfO-L1KWEfcIvdoCA`,
          }
        });
        setMovies(movies);
      } catch (error) {
        console.error("영화 데이터를 불러오는 중 오류 발생: ", error);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h2>높은 평가</h2>
      <MovieGrid>
        {movies.data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </div>
  );
}

export default TopRated;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;