import { DefaultError, InfiniteData, QueryKey, queryOptions, useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';
import { TCategory, TMovieResponse } from '../types/movie';
import { getMovieList } from '../apis/getMovieList';

const useGetInfinite = ({category, queryOptions}:
    {category:TCategory,
    queryOptions?: UseInfiniteQueryOptions<
    TMovieResponse,
    DefaultError,
    InfiniteData<TMovieResponse, number>,
    TMovieResponse,
    QueryKey,
    number
    >}
) => {
    console.log(category);
    return useInfiniteQuery({
        queryFn: ({ pageParam }) => getMovieList({
            category,
            page: pageParam
        }),
        queryKey: ['movieList', category],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPage) => {
            const lastMovie = lastPage.results[lastPage.results.length-1];
            return lastMovie ? allPage?.length+1 : undefined;
        },
        ...queryOptions,
    });
}

export default useGetInfinite;