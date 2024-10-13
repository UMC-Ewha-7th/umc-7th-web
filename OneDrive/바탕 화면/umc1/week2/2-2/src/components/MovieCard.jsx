import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    padding: '10px',
    margin:'5px',
    width: '100px',
    position:'relative',
  };

  const overlayStyle = {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease', 
  };
  const imageStyle={
    width: '100px',
    height: '150px',
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)} // Mouse enter 
      onMouseLeave={() => setIsHovered(false)} // Mouse leave 
    >
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
       alt={movie.title}
       style={imageStyle}  />
      <div style={overlayStyle} />
    </div>
  );
}

export default MovieCard;