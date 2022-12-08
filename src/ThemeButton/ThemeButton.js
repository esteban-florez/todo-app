import React from 'react';
import { Icon } from '../Icon/Icon';
import './ThemeButton.css';

const ThemeButton = () => {
  return (
    <button className='ThemeButton'>
      <Icon type='sun' size='lg' />
    </button>
  );
};

export { ThemeButton };