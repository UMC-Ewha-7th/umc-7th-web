import React from 'react';
import MovieCard from '../components/MovieCard.jsx';
import styled from 'styled-components';
import useMovies from '../hooks/usemovies.jsx';
import { useNavigate } from 'react-router-dom';

function Upcoming() {
  const { movies, loading, error } = useMovies('upcoming');
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <h2>개봉 예정중인 영화</h2>
      <MovieGrid>
        {movies.map((movie) => (
          <div key={movie.id} onClick={() => handleClick(movie.id)}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </MovieGrid>
    </div>
  );
}

export default Upcoming;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  padding: 20px;
`;