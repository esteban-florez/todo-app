import React from 'react';
import SunIcon from '../images/icon-sun.svg';
import MoonIcon from '../images/icon-moon.svg';
import CheckIcon from '../images/icon-check.svg';
import CrossIcon from '../images/icon-cross.svg';
import './Icon.css';

const Icon = ({ type, size }) => {
  const iconTypes = {
    check: CheckIcon,
    cross: CrossIcon,
    moon: MoonIcon,
    sun: SunIcon,
  };

  const iconSizes = {
    lg: ' Icon--lg',
    ml: ' Icon--ml',
    md: ' Icon--md',
    sm: ' Icon--sm',
  };

  return (
    <img className={`Icon${iconSizes[size]}`} src={`${iconTypes[type]}`} />
  );
};

export { Icon };