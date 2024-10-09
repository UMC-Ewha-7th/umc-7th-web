import React from 'react';
import './movie.css';

import { MOVIES } from '../assets/movieDummy';

function Movie() {
    return (
        <div className="movie-container">
            {MOVIES.results.map((movie, index) => (
        <img className="movie-poster"
        key={index}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} Poster`}/>))}
        </div>
    );
}

export default Movie;
