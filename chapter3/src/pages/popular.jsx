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
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const take = 20;

  // const [movies, setMovies] = useState([]);
  // const {
  //   data: movies,
  //   isLoading,
  //   isError,
  // } = useCustomFetch(`/movie/popular?language=ko-KR&page=1`);

  const {
    data: movies,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['movies', 'popular', currentPage],
    queryFn: () =>
      useGetMovies({ category: 'popular', pageParam: currentPage }),
    cacheTime: 10000,
    staleTime: 60000,
    keepPreviousData: true,
    onSuccess: (data) => {
      console.log('React Query 성공, 데이터:', data); // 데이터 확인
    },
    onError: (error) => {
      console.error('React Query 실패:', error); // 에러 출력
    },
  });

  useEffect(() => {
    if (movies) {
      setPosts(movies.results || []);
      setTotal(movies.total_results || 0);
    }
  }, [movies]);

  //마지막 인덱스 번호(5)
  // const lastIndex = currentPage * 5;
  //첫번째 인덱스 번호(0)
  // const firstIndex = lastIndex - 5;

  //20
  const nPage = Math.ceil(total / take);
  //[1,2,3,4,...,10~20]
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  //0~4
  const currentGroup = Math.ceil(currentPage / 5);
  const firstIndex = (currentGroup - 1) * 5;
  const records = numbers.slice(firstIndex, firstIndex + 5);

  // const {
  //   data: movies,
  //   isFetching,
  //   hasNextPage,
  //   fetchNextPage,
  //   isError,
  // } = useInfiniteQuery({
  //   queryFn: ({ pageParam }) =>
  //     useGetMovies({ category: 'popular', pageParam }),
  //   queryKey: ['movies', 'popular'],
  //   staleTime: 30000,
  //   cacheTime: 30000,
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage, allPages) => {
  //     const lastMovie = lastPage.results.at(-1);
  //     return lastMovie ? allPages.length + 1 : undefined;
  //   },
  // });

  // const { ref, inView } = useInView({ threshold: 0 });

  // useEffect(() => {
  //   if (inView) {
  //     !isFetching && hasNextPage && fetchNextPage();
  //   }
  // }, [inView, isFetching, hasNextPage, fetchNextPage]);

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
        {posts?.map((movie, _) => (
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
      <div
        style={{
          display: 'flex',
          columnGap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '240px',
        }}
      >
        <button
          style={{ backgroundColor: '#ee51b2', color: 'white' }}
          disabled={currentPage <= 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          {'<'}
        </button>

        <div style={{ color: 'white', display: 'flex', columnGap: '6px' }}>
          {' '}
          {records.map((record, idx) => {
            return (
              <button
                key={idx}
                style={{ color: 'white', backgroundColor: 'transparent' }}
                onClick={() => setCurrentPage(record)}
              >
                {record}
              </button>
            );
          })}
        </div>
        <button
          style={{ backgroundColor: '#ee51b2', color: 'white' }}
          disabled={currentPage >= nPage}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          {'>'}
        </button>
      </div>
    </>
  );
}

export default Popular;
