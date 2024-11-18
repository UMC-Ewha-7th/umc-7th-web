import Card from "../../components/Card/card.jsx";
import {axiosInstance} from "../../apis/axios-instance.js";
import useCustomFetch from "../../hooks/useCustomFetch.js"
import SkeletonList from "../../components/Card/Skeleton/skeleton-list.jsx";
import { useQuery, useInfiniteQuery } from "react-query";
import { BeatLoader } from "react-spinners";
import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

import * as S from '../movies.style.jsx'

const TopMovie = () =>{
    const { 
        data: movies, 
        isLoading, 
        isError, 
        hasNextPage, 
        fetchNextPage, 
        isFetchingNextPage 
    } = useInfiniteQuery(
        "TopRatedMovies",
        async ({ pageParam = 1 }) => {
            const response = await axiosInstance.get(`/movie/top_rated?language=ko-KR&page=${pageParam}`);
            return response.data;
        },
        {
            getNextPageParam: (lastPage) => {
                return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
            }
        }
    );

    const observerRef = useRef();
    const lastElementRef = useCallback(
        (node) => {
            if (isFetchingNextPage) return;
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });

            if (node) observerRef.current.observe(node);
        },
        [isFetchingNextPage, fetchNextPage, hasNextPage]
    );

    console.log(movies);

    if(isLoading){
        return(
            <S.CardList>
                <SkeletonList/>
            </S.CardList>
        )
    }
 
    return(
        <S.CardList>
            {movies.pages.map((page) =>
                page.results.map((movie, index) => {
                    if (page.results.length === index + 1) {
                        return (
                            <Card
                                ref={lastElementRef}
                                key={movie.id}
                                Id={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                            />
                        );
                    } else {
                        return (
                            <Card
                                key={movie.id}
                                Id={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                            />
                        );
                    }
                })
            )}
            {isFetchingNextPage &&
                <BeatLoader 
                color="#FFDD1A" 
                speedMultiplier={1}
                cssOverride={{alignItems:'center', marginLeft:'50px'}}
                />        }
        </S.CardList>
    );
};

export default TopMovie;