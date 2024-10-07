import React from 'react';
import { Title } from '../Title/Title';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import './TodoHeader.css';

const TodoHeader = () => {
  return (
    <header className='TodoHeader'>
      <div>
        <Title>TODO</Title>
        <ThemeButton />
      </div>
      <p className='TodoHeader-author'>
        Reto de <a href='https://frontendmentor.com'>FrontendMentor</a> - Construido por <a href='https://github.com/esteban-florez'>Esteban Florez</a>
      </p>
    </header>
  );
};

export { TodoHeader };
