import React, {useState, useEffect, useRef} from 'react'; // 데이터를 비동기로 가져옴
import axios from 'axios'; // API 호출 관리

import Card, {CardList} from './Card/card';
import useCustomFetch from '../../hooks/useCustomFetch';

import {useInfiniteQuery} from '@tanstack/react-query';
import styled from 'styled-components';

import {useQuery} from '@tanstack/react-query';
import './pagination.css';

const fetchTopRated = async ({ pageParam = 1 }) => {
    const token = process.env.REACT_APP_TMDB_TOKEN;
    if (!token) {
        throw new Error('API 토큰이 설정되지 않았습니다.');
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

const TopRated = () => {
    const [page, setPage] = useState(1);

    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
    } = useQuery({
        queryKey: ['TopRatedMovies', page],
        queryFn: () => fetchTopRated({ pageParam: page }),
        keepPreviousData: true,
    });

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
        <div>
            <CardList>
                {data?.results ? (
                    data.results.map((movie) => <Card key={movie.id} movie={movie} />)
                ) : (
                    <div style={{ color: 'white' }}>데이터를 불러오지 못했습니다.</div>
                )}
            </CardList>

            <div className="pagination-container">

            <button
                className="pagination-button"
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}>Previous Page</button>

            <span className="pagination-info">Current page: {page}</span>

            <button
                className="pagination-button"
                onClick={() => {
                    if (page < data?.total_pages) {
                        setPage((old) => old + 1);
                    }
                }}
                disabled={isFetching || page >= data?.total_pages}>
                Next Page</button>
            {isFetching ? <span className="pagination-info">Loading...</span> : null}
        </div>

    </div>
    );
};

export default TopRated;

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