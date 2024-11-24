import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch.js';
import { replace, useNavigate } from 'react-router-dom';
import { useGetMovies } from '../hooks/queries/useGetMovies.js';
import { useQuery } from '@tanstack/react-query';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton.jsx';

const apiKey = import.meta.env.VITE_API_KEY;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 10px;
`;

const ContainerImg = styled.img`
  width: 100%; /* 이미지가 그리드 셀에 꽉 차도록 */
  height: auto; /* 이미지 비율 유지 */
  &:hover {
    filter: brightness(0.5);
  }
`;

const Title = styled.p`
  font-size: 12px;
  color: white;
  margin: 1px;
`;

const Date = styled.p`
  font-size: 7px;
  color: white;
  margin: 2px;
`;

const MovieContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 25px;
  padding: 20px;
`;

function NowPlaying() {
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';

  const navigate = useNavigate();

  // const {
  //   data: movies,
  //   isLoading,
  //   isError,
  // } = useCustomFetch(`/movie/now_playing?language=ko-KR&page=1`);

  //isPending: 데이터를 불러오는 중. 데이터가 로딩 중일 때 isPending은 true
  //isLoading: 데이터를 불러오는 중이거나, 재시도 중일 때 true
  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['movies', 'now_playing'],
    queryFn: () => useGetMovies({ category: 'now_playing', pageParam: 1 }),
    cacheTime: 10000,
    staleTime: 10000,
  });

  if (isPending) {
    return (
      <MovieContainer>
        {' '}
        <CardListSkeleton />
      </MovieContainer>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>에러 중</h1>
      </div>
    );
  }

  return (
    <>
      <Container>
        {movies?.results?.map((movie) => (
          <div key={movie.id}>
            <ContainerImg
              src={`${base_url}${file_size}${movie.poster_path}`}
              alt={movie.title}
              onClick={() =>
                navigate(`/movie/${movie.id}`, {
                  replace: false,
                  state: { moiveId: movie.id },
                })
              }
            />
            <Title>
              <strong>{movie.title}</strong>
            </Title>
            <Date>{movie.release_date}</Date>
          </div>
        ))}
      </Container>
    </>
  );
}

export default NowPlaying;
