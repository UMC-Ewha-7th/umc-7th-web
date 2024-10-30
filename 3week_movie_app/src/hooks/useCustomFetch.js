import {useEffect, useState} from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
    const [data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error)
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {data, isLoading, isError}
}

export default useCustomFetch;

/* 이전꺼
// 데이터의 출력 상태를 알려주는 함수
const useCustomfetch = (url) => { // useCustomfetch함수는 해당 url에게 api 요청을 보낸다. 
    // useState 구문을 사용해서 데이터 출력, 로딩, 에러 상태를 관리한다.
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => { // fetchData: 비동기적으로(함수가 실행되는 동안 코드의 나머지 부분이 실행되며 데이터를 가져오는 작업을 백그라운드에서 진행하는 것) 데이터를 가져오는 역할. fetch: 가져오다, 데이터를 가져온다는 의미.
            setIsLoading(true); // 데이터를 가져오라고 요청하면 -> 당연히 로딩상태로 가므로 -> 로딩이 true
            setStatusMessage('Loading..');
            try { // 로딩이 성공하면 try 함수가 실행됨
                const response = await axiosInstance.get(url); // axios-instance.js파일에서 내가 만든, api를 호출하는 함수.
                setData(response);
                setStatusMessage('');
            } catch (error) { // 로딩하는데 에러가 뜨면 setIsError 상태가 됨
                setIsError(true);
                setStatusMessage('An error has occurred. Please reconnect. If the issue persists, contact customer support.');
            } finally { // 로딩이 성공하든 실패하든 상관없이 setIsLoading 상태를 종료함(false)
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {data, isLoading, isError, statusMessage} // 데이터, 로딩 여부, 에러 발생 여부를 출력함
}

export default useCustomfetch; */
