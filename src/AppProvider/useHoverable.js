import React from 'react';

export default function useHoverable() {
  const [hover, setHover] = React.useState(false);

  function enter() {
    setHover(true);
  }

  function leave() {
    setHover(false);
  }

  return { hover, enter, leave };
}