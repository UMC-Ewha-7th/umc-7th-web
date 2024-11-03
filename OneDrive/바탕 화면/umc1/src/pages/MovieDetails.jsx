import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../hooks/useMovieDetails';
import styled from 'styled-components';

function MovieDetails() {
  const { movieId } = useParams();
  console.log("movieId:", movieId);
  const { movie, credits, loading, error } = useMovieDetails(movieId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      {movie && (
        <>
          <Poster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <Details>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p><strong>개봉일:</strong> {movie.release_date}</p>
            <p><strong>평점:</strong> {movie.vote_average}</p>

            {credits && (
              <>
                <h3>출연진</h3>
                <CastList>
                  {credits.cast.slice(0, 5).map((cast) => (
                    <CastItem key={cast.id}>{cast.name} ({cast.character})</CastItem>
                  ))}
                </CastList>
              </>
            )}
          </Details>
        </>
      )}
    </Container>
  );
}

export default MovieDetails;

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Poster = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const Details = styled.div`
  margin-left: 20px;
  color: #333;
`;

const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CastItem = styled.li`
  margin-bottom: 5px;
`;