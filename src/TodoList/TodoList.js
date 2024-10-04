import React from 'react';
import { Button } from '../Button/Button';
import { Filters } from '../Filters/Filters';
import { LeftTodos } from '../LeftTodos/LeftTodos';
import { AppContext } from '../AppProvider/AppProvider';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const { display, currentFilter, todos, leftTodos, completedTodos, clearCompleted } = React.useContext(AppContext);
  let displayedTodos = null;

  switch (currentFilter) {
    case 'all':
      displayedTodos = todos;
      break;
    case 'active':
      displayedTodos = leftTodos;
      break;
    case 'completed':
      displayedTodos = completedTodos;
      break;
    default: throw new Error('Filtro de tareas inválido.')
  }

  return (
    <div className='TodoList-container'>
      <div className='TodoList-footer'>
        <LeftTodos />
        {(display === 'desktop') && <Filters />}
        <Button click={clearCompleted} type='button' size='sm'>Eliminar Completadas</Button>
      </div>
      <ul className='TodoList-list'>
        {displayedTodos.map(
          todo => (
            <TodoItem
              key={todo.text}
              completed={todo.completed}
            >
              {todo.text}
            </TodoItem>)
        )}
      </ul>
    </div>
  );
};

export { TodoList };
