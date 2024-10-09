import React, {useState, useEffect} from 'react'; // 데이터를 비동기로 가져옴
import axios from 'axios'; // API 호출 관리

import Card from './Card/card';
import * as S from './Card/card.style';

const UpComing = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=ko-kr&page=1', {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQwZjFhYzhiZjU2NTQ3ZDNkODMxOTEzYTVmMjBjYiIsIm5iZiI6MTcyODE0MTE4Mi4xMTkxNjgsInN1YiI6IjY3MDE1MmQ4NzgzMGMxMzAxZTdkMDcwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qr9YbyFPWd8J5SSueQM_Xs178mcLMZ1VsNmH-6ci5gA`,
                }
            })
            setMovies(movies);
        }
        getMovies();
    }, []);

    return (
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    )
};

export default UpComing;

