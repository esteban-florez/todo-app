import React from 'react';
import { Button } from '../Button/Button';
import { Filters } from '../Filters/Filters';
import { LeftTodos } from '../LeftTodos/LeftTodos';
import { AppContext } from '../AppProvider/AppProvider';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const { currentFilter, todos, leftTodos, completedTodos, clearCompleted } = React.useContext(AppContext);
  let displayedTodos = null;
  let emptyMessage = '';

  switch (currentFilter) {
    case 'all':
      displayedTodos = todos;
      emptyMessage = 'No has añadido ninguna tarea.'
      break;
    case 'active':
      displayedTodos = leftTodos;
      emptyMessage = 'No posees ninguna tarea sin completar.'
      break;
    case 'completed':
      displayedTodos = completedTodos;
      emptyMessage = 'No posees ninguna tarea completada.'
      break;
    default: throw new Error('Filtro de tareas inválido.')
  }

  return (
    <div className='TodoList-container'>
      <div className='TodoList-header'>
        <LeftTodos />
        <Filters display="desktop" />
        <Button click={clearCompleted} type='button' size='sm'>Eliminar Completadas</Button>
      </div>
      {displayedTodos.length === 0 ? (
        <div className='TodoList-empty'>
          <p className='TodoList-empty-message'>{emptyMessage}</p>
        </div>
      ) : (
      <ul className='TodoList-list'>
        {displayedTodos.map(
          todo => <TodoItem key={todo.id} todo={todo} />
        )}
      </ul>
      )}
    </div>
  );
};

export { TodoList };
