import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import { Button } from '../Button/Button';
import './Filters.css';

function Filters() {
  const { setCurrentFilter, currentFilter } = React.useContext(AppContext);

  const filters = [
    {
      text: 'Todas',
      filter: 'all',
    },
    {
      text: 'Activas',
      filter: 'active',
    },
    {
      text: 'Completadas',
      filter: 'completed',
    },
  ];

  return (
    <nav className='Filters'>
      {filters.map(({ filter, text }) => (
        <Button key={filter} type='button' click={() => setCurrentFilter(filter)} selected={filter === currentFilter} size='lg'>{text}</Button>
      ))}
    </nav>
  );
};

export { Filters };
