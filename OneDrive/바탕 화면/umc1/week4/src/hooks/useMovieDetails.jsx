import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko`,
          { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUzMzRmN2FlZGRiYmYzZjFlNTdlNGFkNGFmZmE5YiIsIm5iZiI6MTcyODQ1MjE4MC42NzUwODMsInN1YiI6IjY3MDVkMzI5MDAwMDAwMDAwMDU4NmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSt-mp-dfYvVhWAZ8wj7GEm8_nkfO-L1KWEfcIvdoCA` } }
        );
        setMovie(movieResponse.data);

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          { headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUzMzRmN2FlZGRiYmYzZjFlNTdlNGFkNGFmZmE5YiIsIm5iZiI6MTcyODQ1MjE4MC42NzUwODMsInN1YiI6IjY3MDVkMzI5MDAwMDAwMDAwMDU4NmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSt-mp-dfYvVhWAZ8wj7GEm8_nkfO-L1KWEfcIvdoCA` } }
        );
        setCredits(creditsResponse.data);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return { movie, credits, loading, error };
};

export default useMovieDetails;