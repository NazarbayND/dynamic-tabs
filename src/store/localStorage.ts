export const saveState = async (key: string, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItemAsync(key, serializedState);
  } catch (err) {
    //error handler
  }
};

export const loadState = async (key: string) => {
  try {
    const serializedState = localStorage.getItemAsync(key);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return err;
  }
};
