export type TCategory = 
    | 'now_playing'
    | 'popular'
    | 'top_rated'
    | 'upcoming';

export type TMovies = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type TMovieResponse = {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: TMovies[],
    total_pages: number,
    total_reuslts: number
}