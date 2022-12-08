import React from 'react';
import './Button.css';

const Button = ({ children, type, size, selected, click }) => {
  const buttonSizes = {
    lg: ' Button--lg',
    sm: ' Button--sm',
  };

  const activeClass = selected ? ' Button--selected' : '';

  return (
    <input
      className={`Button${buttonSizes[size]}${activeClass}`}
      value={children}
      type={type}
      onClick={click}
    />
  );
};

export { Button };