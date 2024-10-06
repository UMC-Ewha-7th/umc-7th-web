import React from 'react';
import { Link } from 'react-router-dom';

function Category({ img, children, to }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div style={{ margin: '10px', position: 'relative' }}>
        <img
          src={img}
          style={{
            width: '240px',
            height: '150px',
            borderRadius: '10px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: ' rgba(0, 0, 0, 0.5)',
            borderRadius: '5px',
            padding: '3px',
          }}
        >
          <p style={{ color: 'white', margin: '0' }}>{children}</p>
        </div>
      </div>
    </Link>
  );
}

export default Category;
