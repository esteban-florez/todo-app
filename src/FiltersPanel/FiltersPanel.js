import React from 'react';
import { Filters } from '../Filters/Filters';
import './FiltersPanel.css';

const FiltersPanel = () => {
  return (
    <div className='FiltersPanel'>
      <Filters />
    </div>
  );
};

export { FiltersPanel };