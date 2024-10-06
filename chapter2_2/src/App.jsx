import React from 'react';
import './App.css';
import { MOVIES } from './components/movies';

function App() {
  const base_url = 'https://image.tmdb.org/t/p/';
  const file_size = 'w200/';

  return (
    <>
      <div className="container">
        {MOVIES.results.map((movie) => (
          <div key={movie.id}>
            <img src={`${base_url}${file_size}${movie.poster_path}`} />
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default App;
