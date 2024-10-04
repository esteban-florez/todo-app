import React, { useState } from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import { Checkbox } from '../Checkbox/Checkbox';
import './TodoForm.css';

const TodoForm = () => {
  const { addTodo } = React.useContext(AppContext);
  const [text, setText] = useState('')
  const empty = text === ''

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!empty) {
      addTodo(text);
    }

    setText('');
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className='TodoForm'>
      <Checkbox formCheckbox></Checkbox>
      <input id='newTodoInput' value={text} onChange={e => setText(e.target.value)} className='TodoForm-input' placeholder='Crear nueva tarea...' />
      <button type='submit' disabled={empty} className='TodoForm-button'>Añadir</button>
    </form>
  );
};

export { TodoForm };
