import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import * as S from './moviedetail.style';

// 영화 상세 정보를 가져오는 함수
const fetchMovieDetail = async (movieId) => {
    const token = process.env.REACT_APP_TMDB_TOKEN;
    if (!token) {
        throw new Error('API 토큰이 설정되지 않았습니다.');
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// 영화 출연진 정보를 가져오는 함수
const fetchMovieCast = async (movieId) => {
    const token = process.env.REACT_APP_TMDB_TOKEN;
    if (!token) {
        throw new Error('API 토큰이 설정되지 않았습니다.');
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};


const MovieDetail = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const { movie } = location.state || {};

    // 영화 상세 정보 가져오기
    const { data: movieDetail, isLoading: isDetailLoading, isError: isDetailError } = useQuery({
        queryKey: ['movieDetail', movieId],
        queryFn: () => fetchMovieDetail(movieId),
        enabled: !!movieId,
    });

    // 영화 출연진 정보 가져오기
    const { data: movieCast, isLoading: isCastLoading, isError: isCastError } = useQuery({
        queryKey: ['movieCast', movieId],
        queryFn: () => fetchMovieCast(movieId),
        enabled: !!movieId,
    });

    if (isDetailLoading || isCastLoading) {
        return <div style={{ color: 'white' }}>로딩 중 입니다...</div>;
    }

    if (isDetailError || isCastError) {
        return <div style={{ color: 'white' }}>에러가 발생했습니다. 반복해서 발생 시 고객센터에 문의해주시기 바랍니다.</div>;
    }

    if (!movieDetail || !movieCast) {
        return <div style={{ color: 'white' }}>영화 정보를 불러오지 못했습니다.</div>;
    }

    const backdropUrl = `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`;
    const director = movieCast.crew.find(member => member.job === 'Director');

    return (
        <>
            <S.DetailWrapper>
                <S.Backdrop backdropUrl={backdropUrl} />
                <S.DetailContent>
                    <S.DetailTitle>{movieDetail.title}</S.DetailTitle>
                    <S.DetailOverview>{movieDetail.overview}</S.DetailOverview>
                    <S.DetailReleaseDate><strong>Release Date:</strong> {movieDetail.release_date}</S.DetailReleaseDate>
                    <S.DetailRate><strong>Rating:</strong> {movieDetail.vote_average}/10</S.DetailRate>
                </S.DetailContent>
            </S.DetailWrapper>

            <S.H2>Movie Cast</S.H2>
            <S.CastWrapper>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {director && (
                        <S.CastCard key={director.id}>
                            <S.CastImg
                                src={director.profile_path
                                    ? `https://image.tmdb.org/t/p/w200/${director.profile_path}`
                                    : 'https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png'}
                                alt={director.name}
                            />
                            <S.ActorName>Director: {director.name}</S.ActorName>
                        </S.CastCard>
                    )}
                    {movieCast.cast.map((actor) => (
                        <div key={actor.id} style={{ margin: '10px' }}>
                            <S.CastCard>
                                <S.CastImg
                                    src={actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                        : `https://www.smilisticdental.com/wp-content/uploads/2017/11/blank-profile-picture-973460_960_720.png`}
                                    alt={actor.name}
                                    style={{ borderRadius: '10px' }}
                                />
                                <S.ActorName>{actor.name}</S.ActorName>
                                <S.CharacterName>{actor.character}</S.CharacterName>
                            </S.CastCard>
                        </div>
                    ))}
                </div>
            </S.CastWrapper>
        </>
    );
};

export default MovieDetail;
