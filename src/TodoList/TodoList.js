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
  }

  return (
    <div className='TodoList-container'>
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
      <div className='TodoList-footer'>
        <LeftTodos />
        {(display === 'desktop') && <Filters />}
        <Button click={clearCompleted} type='button' size='sm' >Clear Completed</Button>
      </div>
    </div>
  );
};

export { TodoList };