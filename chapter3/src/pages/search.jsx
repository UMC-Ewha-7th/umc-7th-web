import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';
import CardListSkeleton from '../components/Skeleton/card-list-skeleton';
import { axiosInstance } from '../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';

function Search() {
  const navigate = useNavigate();
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({
    mq: '',
  });

  const mq = searchParams.get('mq'); // '값' (만약 URL이 `?mq=test`라면 'test' 출력)

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchMovie();
    }
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  console.log('검색값: ', searchValue);

  const useGetSearch = async () => {
    const { data } = await axiosInstance.get(
      `/search/movie?query=${searchValue}&include_adult=false&language=ko-KR&page=1`
    );
    return data;
  };

  // const {
  //   data: movies,
  //   isLoading,
  //   isError,
  // } = useCustomFetch(
  //   `/search/movie?query=${searchValue}&include_adult=false&language=ko-KR&page=1`
  // );

  const { data: movieSearch, isLoading } = useQuery({
    queryKey: ['movieSearch'],
    queryFn: () => useGetSearch(),
    cacheTime: 10000,
    staleTime: 10000,
  });

  return (
    <>
      <SearchContainer>
        <Input
          placeholder="영화 제목을 입력해주세요."
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchKeyDown}
        />
        <Button onClick={handleSearchMovie}>검색</Button>
      </SearchContainer>

      {mq && movieSearch?.results.length === 0 ? (
        <Nodata>
          <H1>검색어 '{mq}'에 해당하는 영화가 없습니다.</H1>
        </Nodata>
      ) : isLoading ? (
        <MovieContainer>
          {' '}
          <CardListSkeleton />
        </MovieContainer>
      ) : (
        <MovieContainer>
          {movieSearch?.results.map((movie) => (
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
        </MovieContainer>
      )}
    </>
  );
}

const Nodata = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const H1 = styled.h1`
  color: white;
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

const ContainerImg = styled.img`
  width: 100%; /* 이미지가 그리드 셀에 꽉 차도록 */
  height: auto; /* 이미지 비율 유지 */
  &:hover {
    filter: brightness(0.5);
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  align-items: center;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
`;

const Button = styled.button`
  width: 80px;
  height: 35px;
  background-color: #ee51b2;
  color: white;
  cursor: pointer;
  border: 0;
  border-radius: 7px;
`;

export default Search;
