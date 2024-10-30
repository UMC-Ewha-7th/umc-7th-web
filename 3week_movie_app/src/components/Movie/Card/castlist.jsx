import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useCustomFetch from '../../../hooks/useCustomFetch';

const CastList = ({ movieId }) => {
  const {data:movieCast, isLoading, isError} = useCustomFetch(`/movie/${movieId}/credits`);  
  
  if (isLoading) {
    return <div style={{ color: 'white' }}>로딩 중 입니다...</div>;
    }

    if (isError) {
    return <div style={{ color: 'white' }}>에러가 발생했습니다. 반복해서 발생 시 고객센터에 문의해주시기 바랍니다.</div>;
    }

    if(!movieCast) {
        return <div style={{ color: 'white'}}>출연진 정보를 불러오지 못했습니다.</div>;
    }

  return (
    <div>
      <h2>Movie Cast</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movieCast.cast.map((actor) => (
          <div key={actor.id} style={{ margin: '10px' }}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
              style={{ borderRadius: '10px' }}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList; 
