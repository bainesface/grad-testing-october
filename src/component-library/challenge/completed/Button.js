import React from 'react';

export const Button = ({ children, onClick, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
);
