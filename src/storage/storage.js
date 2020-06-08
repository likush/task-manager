import { getJsonValue } from '../utils';

export async function getFromStorage (key) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.getItem(key));
    }, 300);
  });
}

export async function setToStorage (key, value) {
  const jsonValue = getJsonValue(key, value);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.setItem(key, jsonValue));
    }, 1000);
  });
}
