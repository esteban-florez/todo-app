import { useState, useEffect, createContext } from 'react';
import useLocalStorage from './useLocalStorage';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [todos, saveTodos] = useLocalStorage('TodoApp_v1', []);
  const [display, setDisplay] = useState(checkWindow(window.innerWidth));
  const [theme, setTheme] = useState('dark');
  const [leftTodos, setLeftTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    const leftTodos = todos.filter(todo => !todo.completed);
    setLeftTodos(leftTodos);
    const completedTodos = todos.filter(todo => todo.completed);
    setCompletedTodos(completedTodos);
  }, [todos]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const addTodo = (text) => {
    const updatedTodos = [...todos];
    const newTodo = {
      completed: false,
      text,
      id: crypto.randomUUID(),
    };
    updatedTodos.unshift(newTodo);
    saveTodos(updatedTodos);
  };

  const clearCompleted = () => {
    saveTodos(leftTodos);
    setCompletedTodos([]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(
      (todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos];
    const searchedIndex = todos.findIndex(todo => todo.id === id);
    updatedTodos.splice(searchedIndex, 1);
    saveTodos(updatedTodos);
  };

  function checkWindow(width) {
    if (width <= 375) return 'mobile';
    return 'desktop';
  }

  useEffect(() => {
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
