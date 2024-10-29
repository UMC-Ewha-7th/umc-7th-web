import { useEffect, useState } from 'react';
import { axiosInstance } from '../apis/axios-instance';

function useCustomFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       // API 호출
  //       const data = await axiosInstance.get(url);

  //       // 응답 데이터를 상태에 저장
  //       setData(data);
  //     } catch (error) {
  //       console.error('Error fetching the movies:', error);
  //     }
  //   };

  //   getMovies();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
}

export default useCustomFetch;
