import React, {useState, useEffect, useRef} from 'react'; // 데이터를 비동기로 가져옴
import axios from 'axios'; // API 호출 관리

import Card, {CardList} from './Card/card';
import useCustomFetch from '../../hooks/useCustomFetch';

import {useInfiniteQuery} from '@tanstack/react-query';
import styled from 'styled-components';

const fetchPopular = async ({ pageParam = 1 }) => {
    const token = process.env.REACT_APP_TMDB_TOKEN;
    if (!token) {
        throw new Error('API 토큰이 설정되지 않았습니다.');
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageParam}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const Popular = () => {
    const {
        data, 
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['PopularMovies'], 
        queryFn: fetchPopular, // 데이터 페칭 함수
        getNextPageParam: (lastPage) => {
            return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined;
        }, // lastPage.page가 lastPage.total_pages보다 작으면 다음 페이지 번호를 반환하고, 그렇지 않으면 undefined를 반환하여 페칭을 중단
    });

    const observerRef = useRef();

    const loadMoreRef = (node) => {
        if (isLoading || isFetchingNextPage || !hasNextPage) return;
        if (observerRef.current) observerRef.current.disconnect();

        // 기존의 Intersection Observer 인스턴스가 있으면 연결을 끊어 새로운 관찰을 준비
        observerRef.current = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) {
                fetchNextPage();
            }
        });
        if (node) observerRef.current.observe(node);
    };

    // const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=en-US&page=1`);
    
    if (isLoading) {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {[...Array(4)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
            </div>
        );
    }
    if (isError) {
        return <div style={{color: 'white'}}>에러가 발생했습니다. 반복해서 발생 시 고객센터에 문의해주시기 바랍니다.</div>
    }

    return (
        <CardList>
            {data?.pages?.map((page) =>
                page.results.map((movie) => <Card key={movie.id} movie={movie} /> )
            )}
            {hasNextPage ? (
                <div ref={loadMoreRef} style={{height: '1px', background: 'transparent'}}></div>
            ) : (
                <div style={{color: 'white'}}>모든 데이터를 불러왔습니다.</div>
            )}
            {isFetchingNextPage && 
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Spinner />
                </div>}
        </CardList>
        /* <CardList>
            {movies?.results.map((movie)=> (
                <Card key={movie.id} movie={movie}/>
            ))}
        </CardList> */
    );
};

export default Popular;

const SkeletonCard = styled.div`
    width: 150px;
    height: 250px;
    border-radius: 10px;
    margin: 10px;
    animation: shimmer 2s infinite linear;

    @keyframes shimmer {
        0% {
            background-position: -150px 0;
        }
        100% {
            background-position: 150px 0;
        }
    }

    background-image: linear-gradient(
        90deg,
        #e0e0e0 0px,
        #f0f0f0 40px,
        #e0e0e0 80px
    );
    background-size: 200% 200%;
`;

const Spinner = styled.div`
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-left-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;