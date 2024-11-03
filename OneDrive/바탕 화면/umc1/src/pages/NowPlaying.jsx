import React from 'react';
import MovieCard from '../../week2/2-2/src/components/MovieCard.jsx';
import styled from 'styled-components';
import useMovies from '../hooks/usemovies.jsx';

function NowPlaying() {
  const { movies, loading, error } = useMovies('now_playing'); // 객체로 구조 분해

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>현재 상영중인 영화</h2>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </div>
  );
}

export default NowPlaying;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;
