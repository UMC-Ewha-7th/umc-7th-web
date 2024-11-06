import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovies = (category) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${category}?language=ko&page=1`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTUzMzRmN2FlZGRiYmYzZjFlNTdlNGFkNGFmZmE5YiIsIm5iZiI6MTcyODQ1MjE4MC42NzUwODMsInN1YiI6IjY3MDVkMzI5MDAwMDAwMDAwMDU4NmJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xSt-mp-dfYvVhWAZ8wj7GEm8_nkfO-L1KWEfcIvdoCA`,
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [category]);

  return { movies, loading, error };
};

export default useMovies;