import Card from "../../components/Card/card.jsx";

import { useEffect, useState } from "react";
import axios from "axios";

import * as S from '../movies.style.jsx'

const PopMovie = () =>{
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-kr&page=1`, {
                headers:{
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjMxZTMwYTE2YjlmMTcyNDQzZjYxMzBlZmRhMTk3MiIsIm5iZiI6MTcyODYyNDM1Ni41ODAyOCwic3ViIjoiNjcwMjI5YTBmYTNlNjllMGVmN2QyMjVkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.sWVlPao-xQPITjN4kSJehuSf7wC5sa_SSViRayHKyuU`,
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    console.log(movies);

 
    return(
        <S.CardList>
            {movies.data?.results.map((movie) => (
                <Card key={movie.id} 
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}/>
            ))}
        </S.CardList>
    );
};

export default PopMovie;