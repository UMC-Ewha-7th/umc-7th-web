import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import MovieList from '../components/MovieList.jsx';
import MovieCard from '../../week2/2-2/src/components/MovieCard.jsx';
import styled from 'styled-components';

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUzMzRmN2FlZGRiYmYzZjFlNTdlNGFkNGFmZmE5YiIsIm5iZiI6MTcyODQ1MjE4MC42NzUwODMsInN1YiI6IjY3MDVkMzI5MDAwMDAwMDAwMDU4NmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSt-mp-dfYvVhWAZ8wj7GEm8_nkfO-L1KWEfcIvdoCA`,
            }
        });
        setMovies(movies);
    }
    getMovies();
}, []);

  // useEffect(() => {
  //   const fetchNowPlayingMovies = async () => {
  //     try {
  //       const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUzMzRmN2FlZGRiYmYzZjFlNTdlNGFkNGFmZmE5YiIsIm5iZiI6MTcyODQ1MjE4MC42NzUwODMsInN1YiI6IjY3MDVkMzI5MDAwMDAwMDAwMDU4NmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSt-mp-dfYvVhWAZ8wj7GEm8_nkfO-L1KWEfcIvdoCA';
  //       const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`);
        
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       setMovies(data.results || []);
  //     } catch (error) {
  //       console.error('Fetching error:', error);
  //       setMovies([]);
  //     }
  //   };

  //   fetchNowPlayingMovies();
  // }, []);

  return (
    <div>
      <h2>현재 상영중인 영화</h2>
      <MovieGrid>
        {
          movies.data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </MovieGrid>
      {/* <MovieList movies={movies} /> */}
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