import React from 'react';
import './movie.css';
import posters from './poster';

function Movie() {
    return (
        <div className="movie-container">
            {posters.map((poster, index) => (
                <img className="movie-poster"
                key={index}
                src={poster.posterUrl} /> ))
            }
        </div>
    );
}

export default Movie;
