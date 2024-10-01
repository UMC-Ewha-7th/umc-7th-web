import React from 'react'
import {MOVIES} from "../assets/movieDummy";
import Movie from '../components/Movie';


export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {
          MOVIES.results.map((item) => {
              return (
                <Movie 
                  poster_path = {item.poster_path}
                />
              );
          })
        }
      </div>
    </div> 
  );
}