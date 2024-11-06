import React from 'react';
import MovieCard from '../components/MovieCard.jsx';
import styled from 'styled-components';
import useMovies from '../hooks/usemovies.jsx';
import { useNavigate } from 'react-router-dom';

function NowPlaying() {
  const { movies, loading, error } = useMovies('now_playing');
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <h2>현재 상영중인 영화</h2>
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

export default NowPlaying;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  padding: 20px;
`;