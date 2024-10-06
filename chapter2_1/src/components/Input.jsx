import React from 'react';

const Input = ({ value, onChange, placeholder, defaultvalue, style }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultvalue}
      style={style}
    />
  );
};

export default Input;
