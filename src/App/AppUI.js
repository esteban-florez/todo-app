import React from 'react';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoList } from '../TodoList/TodoList';
import { FiltersPanel } from '../FiltersPanel/FiltersPanel';
import { TodoForm } from '../TodoForm/TodoForm';
import './AppUI.css';

const AppUI = () => {
  return (
    <div className='App'>
      <TodoHeader />
      <TodoForm />
      <FiltersPanel />
      <TodoList />
      {/* <p className='App-bottom-text'>
        Drag and drop to reorder list
      </p> */}
    </div>
  );
};

export { AppUI };
