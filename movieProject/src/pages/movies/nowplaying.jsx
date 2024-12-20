import Card from "../../components/Card/card.jsx";
import SkeletonList from "../../components/Card/Skeleton/skeleton-list.jsx";
import {axiosInstance} from "../../apis/axios-instance.js";
import { useQuery, useInfiniteQuery} from "react-query";
import React from 'react';
import { useEffect, useState, useRef, useCallback } from "react";

import { BeatLoader } from "react-spinners";
import axios from "axios";
import useCustomFetch from "../../hooks/useCustomFetch.js"

import * as S from '../movies.style.jsx'

const NowMovie = () =>{
    const fetchMovies = async(page) =>{
        const response = await axiosInstance.get(`/movie/now_playing?language=ko-KR&page=${page}`);
        return response.data;
    }


    const [currentPage, setCurrentPage] = useState(1);
    const {data: movies, isLoading, isFetching, isError} = useQuery(
        ["nowPlayingMovies", currentPage],
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

    return (
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
                    disabled={currentPage === 1}>
                    이전
                </button>
                <span>{currentPage}</span>
                <button 
                    onClick={() => handlePageChange(1)} 
                    disabled={currentPage === movies.total_pages}>
                    다음
                </button>
            </S.Pagination>
        </>
)};

export default NowMovie;