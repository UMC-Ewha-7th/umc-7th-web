import { axiosInstance } from '../../apis/axios-instance';

export const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?language=ko-KR&page=${pageParam}`
  );
  return data;
};
