import React from 'react';

const Input = ({ value, onChange }) => {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={onChange}
      className="todo-input"
    />
  );
};

export default Input;