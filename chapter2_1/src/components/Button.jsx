import React from 'react';

function Button({ style, onClick, children }) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
