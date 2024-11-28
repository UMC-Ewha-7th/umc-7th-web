import React, { useState, useEffect } from 'react';
import axios from 'axios'; // api 요청
import Card, {CardList} from '../Movie/Card/card';
import styled from 'styled-components';

const Search = () => {
    const [query, setQuery] = useState(''); // 검색어 상태
    const [results, setResults] = useState([]); // 검색 결과 상태
    const [hasSearched, setHasSearched] = useState(false); // 검색 여부 상태
    const [debouncedQuery, setDebouncedQuery] = useState(query); // 디바운스된 검색어 상태
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 (스켈레톤 ui 출력)

    // query 변경 시 1초 대기 후 debouncedQuery를 업데이트하는 useEffect
    useEffect(() => {
        if (query) {
            setIsLoading(true);
            setHasSearched(false);
        } else {
            // 검색어가 없는 경우 스켈레톤 ui 없음
            setIsLoading(false);
            setHasSearched(false);
            setResults([]);
        }

        const timer = setTimeout(() => {
            setDebouncedQuery(query); // 1초 동안 입력이 없을 때만 query를 업데이트
        }, 1000);

        return () => clearTimeout(timer); // 입력이 발생하면 이전 타이머 제거
    }, [query]);

    // debouncedQuery가 변경될 때만 검색 실행
    useEffect(() => {
        if (debouncedQuery) {
            handleSearch(debouncedQuery);
        }
    }, [debouncedQuery]);

    const handleSearch = async (searchTerm) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/search/movie`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
                },
                params: {
                    query: searchTerm,
                }
            });
            setResults(response.data.results);
            setHasSearched(true); // 검색이 실행되었음을 표시
        } catch (error) {
            console.error('영화 검색 중 오류 발생:', error);
        } finally {
            setIsLoading(false);
        } 
    };

    return (
        <>
            <SearchForm onSubmit={(e) => e.preventDefault()}>
                <SearchInput
                    type="text"
                    placeholder="영화 제목을 입력하세요"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchButton type="submit">검색</SearchButton>
            </SearchForm>

                <CardList>
                    {isLoading ? (
                        Array.from({ length: 8 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                    ) : hasSearched && results.length > 0 ? (
                        results.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))
                    ) : hasSearched && results.length === 0 ? (
                        <ErrorMessage>‘{debouncedQuery}’에 해당하는 데이터가 없습니다.</ErrorMessage>
                    ) : null}
               </CardList>
        </>
    );
};

export default Search;

const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 80%;
    border-radius: 10px;
    padding: 10px 15px;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    width: 400px;
`;

const SearchButton = styled.button`
    padding: 10px 20px;
    background-color: var(--logo-color);
    color: var(--text-color);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
`;

const ErrorMessage = styled.p `
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
`

const SkeletonCard = styled.div`
    width: 150px;
    height: 250px;
    border-radius: 10px;
    margin: 10px;
    animation: shimmer 2s infinite linear;

    @keyframes shimmer {
    0% {
        background-position: -150px 0;
    }
    100% {
        background-position: 150px 0;
    }
    }

    background-image: linear-gradient(
        90deg,
        #e0e0e0 0px,
        #f0f0f0 40px,
        #e0e0e0 80px
    );
    background-size: 200% 200%;
`;