import React from 'react';
import { AppContext } from '../AppProvider/AppProvider';
import useHoverable from '../AppProvider/useHoverable';
import './Checkbox.css';

const Checkbox = ({ children, checked, text, formCheckbox }) => {
  const { completeTodo } = React.useContext(AppContext);
  const { hover, enter, leave } = useHoverable();

  let checkboxClass = '';
  let checkedBgClass = '';
  let hoverClass = '';

  if (!formCheckbox) {
    checkboxClass = checked ? ' Checkbox--checked' : '';
    checkedBgClass = (checked || hover) ? ' Checkbox-checked-bg--visible' : '';
    hoverClass = (!checked && hover) ? ' Checkbox-hover-circle--visible' : '';
  }

  return (
    <div onClick={() => completeTodo(text)} className='Checkbox-container'>
      <div onMouseEnter={enter} onMouseLeave={leave} className={`Checkbox${checkboxClass}`}>
        <div className={`Checkbox-checked-bg${checkedBgClass}`} ></div>
        {children}
        <div className={`Checkbox-hover-circle${hoverClass}`} ></div>
      </div>
    </div >
  );
};

export { Checkbox };