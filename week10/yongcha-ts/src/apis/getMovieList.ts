import { axiosInstance } from "./axios-instance"
import { TCategory } from "../types/movie";

export const getMovieList = async({category, page}:{
    category: TCategory,
    page: number
}) => {
    const { data } = await axiosInstance.get(`/movie/${category}?page=${page}`);

    return data;
}