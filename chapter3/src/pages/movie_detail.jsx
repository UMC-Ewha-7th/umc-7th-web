import React from 'react';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../apis/axios-instance';

const Container = styled.div`
  position: relative;
  padding: 5px;
  color: white;
`;

const CastContiner = styled.div`
  position: absolute;
  top: 290px;
  left: 20px;
`;
const Poster = styled.img`
  width: 100%;
  height: 300px;
  position: absolute;
  top: -20px;
  left: 0px;
  z-index: 0;
  border-radius: 15px;
  opacity: 0.5;
`;

const Detail = styled.div`
  position: absolute;
  top: -20px;
  left: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Title = styled.div`
  padding: 12px 0;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Overview = styled.div`
  padding-top: 14px;
  font-size: 0.8rem;
  width: 530px;
`;

const CastList = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 30px;
  justify-content: space-evenly;
`;

const CastImg = styled.img`
  border: 2px solid white;
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

const Name = styled.div`
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 4px;
`;

const OriginalName = styled.div`
  font-size: 0.7rem;
  font-weight: 300;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MovieDetail() {
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';

  const { movieId } = useParams();
  console.log('movieId:', movieId);

  // const {
  //   data: movieInfo,
  //   isLoading,
  //   isError,
  // } = useCustomFetch(
  //   `/movie/${movieId}?language=ko-KR&append_to_response=images`
  // );

  const useGetMovie = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}?language=ko-KR&append_to_response=images`
    );
    return data;
  };

  const useGetCast = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}/credits?language=ko-KR`
    );
    return data;
  };

  const {
    data: movieInfo,
    isLoading: detailLoading,
    isError: detailError,
  } = useQuery({
    queryKey: [`movieInfo`, 'movie_detail'],
    queryFn: () => useGetMovie(),
    cacheTime: 10000,
    staleTime: 10000,
  });

  const movie = movieInfo;

  console.log('API에서 받아온 영화 응답 데이터:', movieInfo);
  if (movieInfo) {
    console.log('API에서 받아온 영화 포스터 데이터:', movie.title);
  }

  // const { data: castInfo } = useCustomFetch(
  //   `/movie/${movieId}/credits?language=ko-KR`
  // );

  const {
    data: castInfo,
    isLoading: castLoading,
    isError: castError,
  } = useQuery({
    queryKey: [`castInfo`],
    queryFn: () => useGetCast(),
    cacheTime: 10000,
    staleTime: 10000,
  });

  console.log('API에서 받아온 캐스팅 응답 데이터:', castInfo);

  if (detailLoading || castLoading) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>로딩 중입니다...</h1>
      </div>
    );
  }

  if (detailError || castError) {
    return (
      <div>
        <h1 style={{ color: 'white' }}>에러 발생</h1>
      </div>
    );
  }

  return (
    <>
      <Container>
        <Poster src={`${base_url}${file_size}${movie.poster_path}`} />
        <Detail>
          <Title>{movie.title}</Title>
          <div>평균 {movie.vote_average}</div>
          <div> {movie.release_date}</div>
          <div> {movie.runtime}분</div>
          <Overview>{movie.overview}</Overview>
        </Detail>

        <CastContiner>
          <h2>감독/출연</h2>
          <CastList>
            {castInfo?.cast.map((casting) => (
              <Card key={casting.id}>
                <CastImg
                  src={`${base_url}${file_size}${casting.profile_path}`}
                />
                <Name>{casting.name}</Name>
                <OriginalName>{casting.original_name}</OriginalName>
              </Card>
            ))}
          </CastList>
        </CastContiner>
      </Container>
    </>
  );
}

export default MovieDetail;
