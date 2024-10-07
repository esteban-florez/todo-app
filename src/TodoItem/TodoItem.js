import React from 'react';
import { Icon } from '../Icon/Icon';
import { Checkbox } from '../Checkbox/Checkbox';
import { AppContext } from '../AppProvider/AppProvider';
import useHoverable from '../AppProvider/useHoverable';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const { id, text, completed } = todo
  const { deleteTodo } = React.useContext(AppContext);
  const { hover, enter, leave } = useHoverable();

  return (
    <li onMouseEnter={enter} onMouseLeave={leave} className='TodoItem'>
      <Checkbox
        id={id}
        checked={completed}
      >
        {completed && <Icon type='check' size='sm' />}
      </Checkbox>

      <span
        className={`TodoItem-text${completed ? ' TodoItem-text--checked' : ''}`}
      >
        {text}
      </span>

      <div onClick={() => deleteTodo(id)} className={`TodoItem-cross${hover ? ' TodoItem-cross--visible' : ''}`}  >
        <Icon type='cross' size='ml' />
      </div>
    </li>
  );
};

export { TodoItem };
