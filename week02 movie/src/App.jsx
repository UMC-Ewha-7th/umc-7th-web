import './App.css'
import { MOVIES } from './mocks/movie'
import { useState } from 'react'


function App() {
//js 불러와서 results만 뽑아내기, 그 배열에서 다시 poster_path
//const [movies, setMovies] = useState([MOVIES.results]);
console.log(MOVIES);
//console.log(movies[0].poster_path);

//영화 컴포넌트 만들기
  return (
    <div className='movieList' style={{margin:'px' }}>
      {MOVIES.results.map((movies,_)=>(
        <img className='poster' key={MOVIES.id} src={'https://image.tmdb.org/t/p/w200/' + movies.poster_path} style={{borderRadius:'10px'}}/>


      ))};
     

    </div>
  )
}
export default App;
