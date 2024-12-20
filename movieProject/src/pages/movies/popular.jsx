import Card from "../../components/Card/card.jsx";
import * as S from '../movies.style.jsx'
import SkeletonList from "../../components/Card/Skeleton/skeleton-list.jsx";
import { useQuery, useInfiniteQuery } from "react-query";
import {axiosInstance} from "../../apis/axios-instance.js";
import { BeatLoader } from "react-spinners";
import useCustomFetch from "../../hooks/useCustomFetch.js"
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

const PopMovie = () =>{
    const fetchMovies = async(page) =>{
        const response = await axiosInstance.get(`/movie/popular?language=ko-KR&page=${page}`);
        return response.data;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const {data: movies, isLoading, isFetching, isError} = useQuery(
        ["PopularMovies", currentPage],
        ()=> fetchMovies(currentPage),
        {
            keepPreviousData: true,
        }
    )

    const handlePageChange = (direction)=>{
        setCurrentPage((prevPage)=>prevPage + direction);
    }
    
    if(isLoading){
        return(
            <S.CardList>
                <SkeletonList/>
            </S.CardList>
        )
    }
 
    return(
        <>
            <S.CardList>
                {movies?.results.map((movie) =>(
                    <Card
                        key={movie.id}
                        Id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        release_date={movie.release_date}/>
                    ))};
            </S.CardList>
            <S.Pagination>
                <button 
                    onClick={() => handlePageChange(-1)} 
                    disabled={currentPage === 1 || isFetching}>
                    이전
                </button>
                <span>{`Page ${currentPage}`}</span>
                <button 
                    onClick={() => handlePageChange(1)} 
                    disabled={isFetching || currentPage === movies?.total_pages}>
                    다음
                </button>
            </S.Pagination>      
        </>

    );
};

export default PopMovie;