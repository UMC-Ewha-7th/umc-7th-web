import React, {useState, useEffect} from 'react'; // 데이터를 비동기로 가져옴
import axios from 'axios'; // API 호출 관리

import * as S from './movie.style';

const UpComing = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQwZjFhYzhiZjU2NTQ3ZDNkODMxOTEzYTVmMjBjYiIsIm5iZiI6MTcyODE0MTE4Mi4xMTkxNjgsInN1YiI6IjY3MDE1MmQ4NzgzMGMxMzAxZTdkMDcwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qr9YbyFPWd8J5SSueQM_Xs178mcLMZ1VsNmH-6ci5gA`,
                }
            })
            setMovies(movies);
        }
        getMovies();
    }, []);

    return (
        <S.MovieContainer>
            {movies.data?.results.map((movie) => (
                <S.MovieWrapper key={movie.id}>
                    <S.MoviePoster
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={`${movie.title} Poster`}/>
                    <S.MovieTitle>{movie.title}</S.MovieTitle>
                    <S.MovieReleaseDate>{movie.release_date}</S.MovieReleaseDate>
                </S.MovieWrapper>
            ))}
        </S.MovieContainer>
    );
};

export default UpComing;

