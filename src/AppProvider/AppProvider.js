import React from 'react';
import useLocalStorage from './useLocalStorage';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todos, saveTodos] = useLocalStorage('TodoApp_v1', []);
  const [display, setDisplay] = React.useState(checkWindow(window.innerWidth));
  const [theme, setTheme] = React.useState('dark');
  const [leftTodos, setLeftTodos] = React.useState([]);
  const [completedTodos, setCompletedTodos] = React.useState([]);
  const [currentFilter, setCurrentFilter] = React.useState('all');

  React.useEffect(() => {
    const leftTodos = todos.filter(todo => !todo.completed);
    setLeftTodos(leftTodos);
    const completedTodos = todos.filter(todo => todo.completed);
    setCompletedTodos(completedTodos);
  }, [todos]);

  const addTodo = (text) => {
    const updatedTodos = [...todos];
    const newTodo = {
      completed: false,
      text,
    };
    updatedTodos.unshift(newTodo);
    saveTodos(updatedTodos);
  };

  const clearCompleted = () => {
    saveTodos(leftTodos);
    setCompletedTodos([]);
  };

  const completeTodo = (text) => {
    const updatedTodos = todos.map(
      (todo) => {
        if (todo.text === text) {
          todo.completed = true;
        }
        return todo;
      });
    saveTodos(updatedTodos);
  };

  const deleteTodo = (text) => {
    const updatedTodos = [...todos];
    const searchedIndex = todos.findIndex(todo => todo.text === text);
    updatedTodos.splice(searchedIndex, 1);
    saveTodos(updatedTodos);
  };

  function checkWindow(width) {
    if (width <= 375) return 'mobile';
    return 'desktop';
  }

  React.useEffect(() => {
    window.onresize = () => {
      setDisplay(checkWindow(window.innerWidth));
    };
  }, []);

  return (
    <AppContext.Provider value={{
      todos,
      leftTodos,
      completedTodos,
      currentFilter,
      setCurrentFilter,
      addTodo,
      completeTodo,
      deleteTodo,
      clearCompleted,
      display,
      theme,
      setTheme,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
