import React from 'react';
import { Icon } from '../Icon/Icon';
import { Checkbox } from '../Checkbox/Checkbox';
import { AppContext } from '../AppProvider/AppProvider';
import useHoverable from '../AppProvider/useHoverable';
import './TodoItem.css';

const TodoItem = ({ children, completed }) => {
  const { deleteTodo } = React.useContext(AppContext);
  const { hover, enter, leave } = useHoverable();

  return (
    <li onMouseEnter={enter} onMouseLeave={leave} className='TodoItem'>
      <Checkbox
        text={children}
        checked={completed}
      >
        {completed && <Icon type='check' size='sm' />}
      </Checkbox>

      <span
        className={`TodoItem-text${completed ? ' TodoItem-text--checked' : ''}`}
      >
        {children}
      </span>

      <div onClick={() => deleteTodo(children)} className={`TodoItem-cross${hover ? ' TodoItem-cross--visible' : ''}`}  >
        <Icon type='cross' size='ml' />
      </div>
    </li>
  );
};

export { TodoItem };