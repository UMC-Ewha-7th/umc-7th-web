import axios from 'axios';

// 데이터를 불러오는 함수
const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
    },
    baseURL: process.env.REACT_APP_MOVIE_API_URL,
})

export {axiosInstance}

/* 기존 내용
const getMovies = async () => {
    const movies = await axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movie/now_playing?language=ko-kr&page=1`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`
        }
    })
    setMovies(movies);
} */

/* 현재
useEffect(() => {
    const getMovies = async () => {
        const movies = await axiosInstance.get(`/movie/now_playing?language=ko-kr&page=1`);
        setMovies(movies);
    }
    getMovies()
}, []); */