export const saveState = (key: string, state) =>
  localStorage.setItem(key, JSON.stringify(state));

export const loadState = (key: string) => JSON.parse(localStorage.getItem(key));

export const removeState = (key: string) => localStorage.removeItem(key);
