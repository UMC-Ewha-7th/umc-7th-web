import { useParams } from 'react-router-dom';
import useCustomFetch from "../hooks/useCustomFetch.js"
import './pages.css'
import { useState } from 'react';
import styled from 'styled-components';
import Cast from '../components/Card/Cast.jsx';
import React from 'react';
import * as S from './movies.style.jsx'

const MovieDetailPage = () => {
  const {movieId} = useParams();
  

  const {data : movies, isLoading, isError} = useCustomFetch(`/movie/` + movieId + `?language=ko-KR`);

  const {data : credits, isLoading2, isError2} = useCustomFetch(`/movie/` + movieId + `/credits?language=ko-KR`);


  console.log(credits.data);
  
  //평점 반올림
  const review_verage = Math.round(movies.data?.vote_average * 10) / 10 ;
  //개봉 '년도'만

  return (
    <div className="detail">
      <ImgCard>
        <img src={"https://image.tmdb.org/t/p/w1280/" + movies.data?.backdrop_path}/> 
        <TextPos>
          <h2> {movies.data?.title} </h2>
          <p> 평균 {review_verage} </p>
          <p className='released_year'> {movies.data?.release_date} </p>
          <p> {movies.data?.runtime} 분 </p>
          <h3> "{movies.data?.tagline}" </h3>
          <p className='overview_article'> {movies.data?.overview} </p> 
        </TextPos> 
      </ImgCard>
      <h2 style={{color:'#F0F0F0'}}> 감독/출연 </h2>
      <CreditsArea>
        {credits.data?.cast.map((credit) => (
          <Cast key = {credit.credit_id}
          name = {credit.name}
          profile_path = {credit.profile_path}
          character = {credit.character} />
        ))}
      </CreditsArea>
    </div>
  )
}


const ImgCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 280px;

    position: relative;
    margin-top: 15px;

    img{
      object-fit: cover;
      border-radius:10px;
      width:100%;
      height: 100%;
    }
`

const TextPos = styled.div`
  background: linear-gradient(to right, #121212BB 30%, #12121200) ;
  
  color: #f0f0f0;
  margin: 0px;
  padding-left:2%;
  
  position: absolute;

  height: 100%;
 
  
  p{
    margin: 0px;
    display: flex;
    display-direction: column;
    word-wrap: break-word;
    color: #f0f0f0;
    width: 50%;
  }

  h2{
    margin-bottom: 10px;
  }

  h3{
    margin-top:10px;
    margin-bottom:10px;
  }
  
  p.released_year{
    
  }

  p.overview_article{
    height: 5.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

`
const CreditsArea = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 25px;
`

export default MovieDetailPage;