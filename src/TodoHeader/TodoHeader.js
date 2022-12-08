import React from 'react';
import { Title } from '../Title/Title';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import './TodoHeader.css';

const TodoHeader = () => {
  return (
    <header className='TodoHeader'>
      <Title>TODO</Title>
      <ThemeButton />
    </header>
  );
};

export { TodoHeader };