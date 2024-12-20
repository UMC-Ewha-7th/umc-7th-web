import styled from "styled-components";
import * as S from './movies.style.jsx'
import Card from '../components/Card/card.jsx';
import CardSkeleton from '../components/Card/Skeleton/card-skeleton.jsx';
import SkeletonList from '../components/Card/Skeleton/skeleton-list.jsx';
import useCustomFetch from "../hooks/useCustomFetch.js";
import { useState } from "react";

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState("");
    const onChange = (e) => {
        setSearchValue(e.target.value);
    };

    const {data : movies, isLoading, isError} = useCustomFetch(`/search/movie?query=`+ searchValue + `&include_adult=true&language=ko-KR&page=1`);

    if(isLoading){
        return(
            <Search>
                <SearchP>
                    <SearchBar value={searchValue} onChange={onChange} placeholder="검색어를 입력하세요" />
                    <SearchButton> 검색 </SearchButton>
                </SearchP>
                <SearchLoading>
                    <SkeletonList/>
                </SearchLoading>
            </Search>
        )
    }

    if(searchValue && movies.data?.results.length === 0) {
        return(
            <Search>
                <SearchP>
                    <SearchBar value={searchValue} onChange={onChange} placeholder="검색어를 입력하세요" />
                    <SearchButton> 검색 </SearchButton>
                </SearchP>
                <h2> "{searchValue}"에 대한 검색 결과가 없습니다. </h2>
            </Search>
        )
    }

    console.log(searchValue);
    console.log(movies.data?.results);

    return(
        <Search>
            <SearchP>
                <SearchBar value={searchValue} onChange={onChange} placeholder="검색어를 입력하세요" />
                <SearchButton> 검색 </SearchButton>
            </SearchP>
            <S.CardList>
                {movies.data?.results.map((movie) => (
                <Card key={movie.id} 
                Id={movie.id} 
                poster_path={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}/>
            ))}  
            </S.CardList>
        </Search>

    );
};

const Search = styled.div`
    color: #f0f0f0;
    text-align: center;
`

const SearchLoading = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 15px;
`
const SearchP = styled.div`
    color: #f0f0f0;
    width: 100%;
    display: flex;
    gap: 5px;
    margin: 0 auto;
    margin-top: 25px;
    
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const SearchBar = styled.input`
    box-sizing: border-box;
    padding: 8px;
    width: 450px;
    height: 45px;
    border-radius: 4px;
`
const SearchButton = styled.button`
    box-sizing: border-box;
    background-color: #FFDD1A;
    border-radius: 4px;
    margin: 0px;
    padding: 0px;
    width: 75px;
    height: 45px;    
    background-color: #FFDD1A;
    border-radius: 4px;
    &:hover{
        cursor: pointer;
    }
`

export default SearchPage;