export async function getFromStorage (key) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.getItem(key));
    }, 1000);
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

function getJsonValue (key, value) {
  if (key === 'processes') {
    return JSON.stringify(value);
  } else if (key === 'jobs') {
    return JSON.stringify(Array.from(value.entries()));
  }
}
