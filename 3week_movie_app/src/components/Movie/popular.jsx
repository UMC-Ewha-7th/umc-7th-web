import React, {useState, useEffect} from 'react'; // 데이터를 비동기로 가져옴
import axios from 'axios'; // API 호출 관리

import Card from './Card/card';
import * as S from './Card/card.style';
import useCustomFetch from '../../hooks/useCustomFetch';

const Popular = () => {
    const {data: movies, isLoading, isError} = useCustomFetch(`/movie/popular?language=en-US&page=1`);
    
    if (isLoading) {
        return <div style={{color: 'white'}}>로딩 중 입니다...</div>
    }
    if (isError || !movies?.results) {
        return <div style={{color: 'white'}}>에러가 발생했습니다. 반복해서 발생 시 고객센터에 문의해주시기 바랍니다.</div>
    }

    return (
        <S.CardList>
            {movies?.results.map((movie)=> (
                <Card key={movie.id} movie={movie}/>
            ))}
        </S.CardList>
    );
};

export default Popular;