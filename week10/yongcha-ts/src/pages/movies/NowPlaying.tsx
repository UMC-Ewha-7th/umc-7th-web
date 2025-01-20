import { useInView } from "react-intersection-observer";
import CardContainer from "../../components/CardContainer";
import useGetInfinite from "../../hooks/useGetInfinite";
import WhiteTitle from "../../components/WhiteTitle";
import MovieCard from "../../components/MovieCard";
import { useEffect } from "react";

const NowPlaying = () => {
    const {
        data:movies,
        isPending,
        isError,
        isFetching,
        hasNextPage,
        fetchNextPage
    } = useGetInfinite({category:'now_playing'});
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    if (isPending) return (
        <>
            <WhiteTitle>로딩중...</WhiteTitle>
        </>
    );

    if (isError) return (
        <>
            <WhiteTitle>에러</WhiteTitle>
        </>
    )

    return (
        <>
        <CardContainer>
            {movies?.pages.map((page) => {
                return page.results.map(movie => (
                    <MovieCard key={movie.id}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    movieId={movie.id}
                    />
                ))
            })}
        </CardContainer>
        <div ref={ref}>
            {isFetching && <WhiteTitle>로딩중!!</WhiteTitle>}
        </div>
        </>
    );
};

export default NowPlaying;