import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import './LeftTodos.css';

const LeftTodos = () => {
  const { leftTodos } = React.useContext(AppContext);
  return <span className='LeftTodos'>{leftTodos.length} tareas restantes.</span>;
};

export { LeftTodos };
