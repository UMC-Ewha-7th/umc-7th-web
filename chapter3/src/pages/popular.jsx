import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useGetMovies } from '../hooks/queries/useGetMovies.js';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton.jsx';
import { useInView } from 'react-intersection-observer';
import { ClipLoader } from 'react-spinners';

const apiKey = import.meta.env.VITE_API_KEY;
const movieKey = import.meta.env.VITE_MOVIE_API_URL;

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

function Popular() {
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';
  const navigate = useNavigate();

  // const [movies, setMovies] = useState([]);
  // const {
  //   data: movies,
  //   isLoading,
  //   isError,
  // } = useCustomFetch(`/movie/popular?language=ko-KR&page=1`);

  // const {
  //   data: movies,
  //   isPending,
  //   isError,
  // } = useQuery({
  //   queryKey: ['movies', 'popular'],
  //   queryFn: () => useGetMovies({ category: 'popular', pageParam: 1 }),
  //   cacheTime: 10000,
  //   staleTime: 10000,
  // });

  const {
    data: movies,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isError,
  } = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      useGetMovies({ category: 'popular', pageParam }),
    queryKey: ['movies', 'popular'],
    staleTime: 30000,
    cacheTime: 30000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const lastMovie = lastPage.results.at(-1);
      return lastMovie ? allPages.length + 1 : undefined;
    },
  });

  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  // if (isPending) {
  //   return (
  //     <MovieContainer>
  //       {' '}
  //       <CardListSkeleton />
  //     </MovieContainer>
  //   );
  // }

  if (isError) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>에러 중</h1>
      </div>
    );
  }

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       // API 호출
  //       const response = await axios.get(
  //         '${movieKey}/movie/popular?language=ko-KR&page=1',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${apiKey}`,
  //           },
  //         }
  //       );

  //       // 응답 데이터를 상태에 저장
  //       setMovies(response.data.results);
  //     } catch (error) {
  //       console.error('Error fetching the movies:', error);
  //     }
  //   };

  //   getMovies();
  // }, []);

  return (
    <>
      <Container>
        {movies?.pages?.map((page) =>
          page?.results?.map((movie, _) => (
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
          ))
        )}
        {isFetching && (
          <div style={{ display: 'flex', gap: '20px' }}>
            <CardListSkeleton />
          </div>
        )}
      </Container>
      <div
        ref={ref}
        style={{
          marginTop: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {' '}
        {isFetching && <ClipLoader style={{ color: '#fff' }} />}
      </div>
    </>
  );
}

export default Popular;
