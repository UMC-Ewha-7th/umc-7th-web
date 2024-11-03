import React from 'react';
import MovieCard from '../../week2/2-2/src/components/MovieCard.jsx';
import styled from 'styled-components';
import useMovies from '../hooks/usemovies.jsx';

function Upcoming() {
  const { movies, loading, error } = useMovies('upcoming');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>개봉 예정 영화</h2>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </div>
  );
}

export default Upcoming;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;