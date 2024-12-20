import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import { useState } from "react";
import HomeBeforeLogin from "./components/HomeBeforeLogin";
import HomeAfterLogin from "./components/HomeAfterLogin";

const HomePage = () => {
    const { isAuthenticated, logout } = useAuth();
    const getRandomNum = () =>{
        return parseInt(Math.random()*20)
    }
    const imgnum = getRandomNum();
    const {data:movie, isLoading, isError} = useCustomFetch(`/discover/movie?include_adult=false&include_video=true&language=ko-KR&page=1&sort_by=popularity.desc`);
    //const movie = data.data?.results;
    console.log(imgnum);
    console.log(movie.data?.results[imgnum].backdrop_path);

    return(
        <HomeP>
            {isAuthenticated ? (
                <HomeAfterLogin
                    key={movie.data?.results[imgnum].id}
                    {...movie.data?.results[imgnum]}/>
            ) : (
                <HomeBeforeLogin
                    key={movie.data?.results[imgnum].id}
                    backdrop_path={movie.data?.results[imgnum].backdrop_path} />

            )}
        </HomeP>

    );
};

const HomeP = styled.div`
    color: white;

    font-family: "Noto Sans KR", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
`

const AfterLogin = styled.div`

`

const BeforeLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        margin: 5px;
        color:rgba(240, 240, 240, 0.75)    
    };
    
`


export default HomePage;