import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import { Checkbox } from '../Checkbox/Checkbox';
import './TodoForm.css';

const TodoForm = () => {
  const { addTodo } = React.useContext(AppContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let input = document.querySelector('#newTodoInput');
    let newTodoText = input.value;
    if (!newTodoText.length < 1) {
      addTodo(newTodoText);
    }
    input.value = '';
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className='TodoForm'>
      <Checkbox formCheckbox></Checkbox>
      <input id='newTodoInput' className='TodoForm-input' placeholder='Create a new todo...' />
    </form>
  );
};

export { TodoForm };