import Card from "../../components/Card/card.jsx";
import {axiosInstance} from "../../apis/axios-instance.js";
import useCustomFetch from "../../hooks/useCustomFetch.js"
import { useEffect, useState } from "react";
import axios from "axios";

import * as S from '../movies.style.jsx'

const TopMovie = () =>{
    const {data : movies, isLoading, isError} = useCustomFetch(`/movie/top_rated?language=ko-KR&page=1`);
 
    return(
        <S.CardList>
                {movies.data?.results.map((movie) => (
                <Card key={movie.id}
                Id={movie.id} 
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}/>
            ))}  

        </S.CardList>
    );
};

export default TopMovie;