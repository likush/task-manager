export async function getFromStorage (key) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem(key)));
    }, 300);
  });
}


export async function insertToStorage (key, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      const defaultValue = key === 'processes' ? [] : {};
      const jsonValue = (JSON.parse(localStorage.getItem(key))) || defaultValue;
      let result;

      if (key === 'processes') {
        result = [...jsonValue, value];
      } else if (key === 'jobs') {
        result = {...jsonValue, ...value};
      }
      resolve(localStorage.setItem(key, JSON.stringify(result)));
    }, 300);
  });
}
