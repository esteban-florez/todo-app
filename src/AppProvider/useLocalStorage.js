import React from 'react';

export default function useLocalStorage(itemName, defaultValue) {
  let localStorageItem = localStorage.getItem(itemName);

  if (!localStorageItem) {
    let stringDefaultValue = JSON.stringify(defaultValue);
    localStorage.setItem(itemName, stringDefaultValue);
    localStorageItem = stringDefaultValue;
  }

  const parsedItem = JSON.parse(localStorageItem);
  const [item, setItem] = React.useState(parsedItem);

  function saveItem(value) {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(itemName, stringifiedValue);
    setItem(value);
  }
  return [item, saveItem];
}