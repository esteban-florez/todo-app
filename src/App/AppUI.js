import React from 'react';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoList } from '../TodoList/TodoList';
import { FiltersPanel } from '../FiltersPanel/FiltersPanel';
import { AppContext } from '../AppProvider/AppProvider';
import { TodoForm } from '../TodoForm/TodoForm';
import './AppUI.css';

const AppUI = () => {
  const { display } = React.useContext(AppContext);

  return (
    <div className='App'>
      <TodoHeader />
      <TodoForm />
      <TodoList />
      {display === 'mobile' &&
        <FiltersPanel />}
      {/* <p className='App-bottom-text'>
        Drag and drop to reorder list
      </p> */}
    </div>
  );
};

export { AppUI };
