import { useContext } from 'react';
import { AppContext } from '../AppProvider/AppProvider'
import { Icon } from '../Icon/Icon';
import './ThemeButton.css';

const ThemeButton = () => {
  const { theme, setTheme } = useContext(AppContext)

  const type = theme === 'light' ? 'moon' : 'sun'

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className='ThemeButton' onClick={handleClick}>
      <Icon type={type} size='lg' />
    </button>
  );
};

export { ThemeButton };
